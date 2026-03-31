import { useState, useCallback, useMemo } from 'react';

export interface KPFormData {
  orderNumber: string;
  date: string;
  clientName: string;
  city: string;
  productType: string;
  closureSystem: string;
  glassType: string;
  length: number;
  height: number;
  pricePerSqm: number;
  extras: number;
}

export interface KPComputed {
  area: string;
  systemCost: string;
  totalPrice: string;
  lengthStr: string;
  heightStr: string;
  extrasStr: string;
}

const fmt = (n: number) => n.toLocaleString('ru-RU');

const todayStr = () => new Date().toLocaleDateString('ru-RU');

const defaultData: KPFormData = {
  orderNumber: '2026-' + String(Math.floor(Math.random() * 900) + 100),
  date: todayStr(),
  clientName: '',
  city: '',
  productType: 'Система TANGO',
  closureSystem: 'Безрамное складное',
  glassType: 'Прозрачное закалённое 10 мм',
  length: 450,
  height: 280,
  pricePerSqm: 1200,
  extras: 800,
};

export function useKPData() {
  const [formData, setFormData] = useState<KPFormData>(defaultData);

  const updateField = useCallback(<K extends keyof KPFormData>(key: K, value: KPFormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      ...defaultData,
      orderNumber: '2026-' + String(Math.floor(Math.random() * 900) + 100),
      date: todayStr(),
    });
  }, []);

  const computed: KPComputed = useMemo(() => {
    const area = (formData.length * formData.height) / 10000;
    const systemCost = Math.round(area * formData.pricePerSqm);
    const total = systemCost + formData.extras;
    return {
      area: area.toFixed(2),
      systemCost: fmt(systemCost),
      totalPrice: fmt(total),
      lengthStr: formData.length + ' см',
      heightStr: formData.height + ' см',
      extrasStr: fmt(formData.extras),
    };
  }, [formData]);

  return { formData, updateField, resetForm, computed };
}
