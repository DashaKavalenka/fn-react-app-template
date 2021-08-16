import React from 'react';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation();

  return <span>{t('app.header')}</span>;
};
