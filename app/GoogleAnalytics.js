'use client';
import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    gtag('event', 'conversion', {
      send_to: 'AW-706322979/PGtgCOuaqcoYEKPE5tAC',
      value: 1.0,
      currency: 'AED',
      transaction_id: '',
    });
  }, []);

  return null;
};

export default GoogleAnalytics;
