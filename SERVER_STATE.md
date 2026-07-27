# Бриф для Claude Code: текущее состояние сервера Modernbuilding

Дата диагностики: 27 июля 2026. Вся информация ниже подтверждена вручную через SSH — не предположения.

## Доступ к серверу

- Хостинг: Beget VPS, Ubuntu 24.04.4 LTS
- IP: `31.129.96.244`
- Подключение: `ssh root@31.129.96.244`
- Имя сервера в системе: `aownarurks`
- PM2 установлен, но сейчас нет ни одного запущенного процесса (`pm2 list` — пусто)
- Диск: занято 94,9% из 8,65 ГБ — требует уборки, см. задачи ниже

## Владелец не программист

Хозяин проекта — вайбкодер, не разработчик. Любое действие описывай простыми словами, что именно делаешь и зачем, прежде чем выполнять на продакшн-сервере необратимые операции (удаление файлов, перезапись папок).

## Три живых сайта — подтверждённая карта

| Домен | Папка на сервере (nginx root) | Связь с GitHub |
|---|---|---|
| `cp.modernbuildinginfo.co.il` (генератор КП) | `/var/www/smart-proposal-generator` | ✅ Есть. Источник: `/root/kp-temp`, репозиторий `github.com/ororegina111-spec/smart-proposal-generator`, ветка main. Отсюда недавно уже обновляли по правильной схеме (`git pull && npm run build && cp -r dist/* ... && systemctl reload nginx`). Это эталон, как должно быть у всех трёх. |
| `app.modernbuildinginfo.co.il` (калькулятор) | `/var/www/app-modernbuilding` | ❌ Нет. По истории команд (`~/.bash_history`) собран из репозитория `balc-pergola-pro` (папка `/root/balc-temp`), но эта папка с тех пор удалена с сервера. |
| `modernbuildinginfo.co.il` (главный портал) | `/var/www/modernbuilding-main` | ❌ Нет. По истории команд: сначала пытались запустить `modernbuildingbasig` (TanStack Start, несколько неудачных попыток — реальная ошибка `ERR_MODULE_NOT_FOUND` в логах), затем перешли на репозиторий `newmodernbuildingstart`, и вручную скопировали его `src` в папку `modernbuilding-main` (`cp -r ~/newmodernbuildingstart/src/* ~/modernbuilding-main/src/`) — то есть возможны ручные правки, которых нет в самом репозитории на GitHub. Папка `/root/modernbuilding-main` с тех пор удалена. |

## Репозитории на GitHub — полный список и статус

- `ororegina111-spec/smart-proposal-generator` — React 18 + Vite + Supabase. Живой источник для cp. Стек: обычная статичная сборка (dist), Node-сервер не нужен.
- `ororegina111-spec/balc-pergola-pro` — React 18 + Vite + TanStack Query + Zod. Источник для app., но подключение к серверу нужно восстановить.
- `ororegina111-spec/newmodernbuildingstart` — TanStack Start (React 19) + Supabase. Вероятный источник главного портала, но нужна сверка с ручными правками на сервере (см. задачу 3 ниже).
- `ororegina111-spec/modernbuildingbasig` — на GitHub НЕ существует (404 при проверке). При этом папка с таким именем фигурирует в старой (уже отключённой) настройке nginx — мёртвый след прошлой неудачной попытки.
- `ororegina111-spec/modernbuilding` — пустой репозиторий, только README.md, кода нет. Не используется.

## Задачи по порядку

### 1. Диагностика диска (только смотрим, ничего не удаляем)
```
df -h
du -sh /var/www/*
du -sh /root/.npm /root/.cache /root/.pm2 2>/dev/null
```
Показать владельцу результат и вместе решить, что безопасно чистить.

### 2. Уборка неиспользуемых конфигов nginx
Подтверждено: в `/etc/nginx/sites-enabled/` реально включены только `app-modernbuilding`, `cp-modernbuilding`, `modernbuilding-main`. Файлы конфигурации `modernbuildingbasig` и `modernbuildingbasg` в `sites-available/` есть, но НЕ подключены — безопасно удалить сам файл конфигурации (после ещё одной проверки `ls -la /etc/nginx/sites-enabled/`, что они точно не появились там снова).

### 3. Восстановить живую связь с GitHub для app.
```
cd /root && git clone https://github.com/ororegina111-spec/balc-pergola-pro.git app-temp
cd app-temp && npm install && npm run build
```
Сравнить результат сборки с тем, что сейчас видно на `https://app.modernbuildinginfo.co.il` (открыть оба и сверить визуально с владельцем). Если совпадает — заменить:
```
rm -rf /var/www/app-modernbuilding/* && cp -r /root/app-temp/dist/* /var/www/app-modernbuilding/ && systemctl reload nginx
```
С этого момента обновлять именно через `/root/app-temp` (`git pull && npm run build && ...`), не трогая `/var/www` вручную.

### 4. Восстановить живую связь с GitHub для главного портала — ОСТОРОЖНО
Здесь были ручные правки `src`, которых может не быть в репозитории. Порядок:
```
cd /root && git clone https://github.com/ororegina111-spec/newmodernbuildingstart.git portal-temp
cd portal-temp && npm install && npm run build
```
Обязательно сравнить результат с тем, что сейчас реально показывает `https://modernbuildinginfo.co.il`, ПРЕЖДЕ чем что-либо заменять. Если есть визуальные расхождения — сначала перенести отличия в код репозитория (и закоммитить), и только потом заменять содержимое `/var/www/modernbuilding-main`. Не перезаписывать вслепую.

### 5. После восстановления
- Убедиться, что все три сайта работают одинаково — через `git pull` в закреплённой папке в `/root/`, без ручного копирования файлов в обход GitHub.
- Решить с владельцем судьбу пустого репозитория `modernbuilding` (архивировать/удалить).
- Проверить, не занимает ли лишнее место `/root/kp-temp`, `/root/app-temp`, `/root/portal-temp` — после уборки диска (задача 1) убедиться, что свободного места достаточно.

## Принципы, которые нужно соблюдать всегда

- GitHub — единственный источник истины. Никаких правок файлов напрямую в `/var/www`.
- Каждая живая папка в `/var/www` должна соответствовать закреплённой папке-клону в `/root`, у которой есть `git remote -v` на реальный репозиторий.
- Перед любой заменой файлов на продакшене — сравнение со старой версией, не слепая перезапись.
- Пароль от root: если получаете ошибку `Permission denied` несколько раз подряд — сервер может временно заблокировать IP (Fail2ban); подождать или зайти через встроенную консоль в панели Beget (раздел «Облако»).
