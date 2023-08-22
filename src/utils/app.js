'use client';
import { persistor, store } from '@/store/index';
import { useEffect, useState } from 'react';
import i18n from '../../i18n';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Register from './_register';
export default function App({ children }) {
    const [sitting, setSitting] = useState(null);
    useEffect(() => {
        const sitting = JSON.parse(localStorage.getItem('SITTING') || '');
        if (sitting) {
            setSitting(sitting?.sitting);
        } else {
            store.dispatch({ type: 'SETTING' });
        }
        const unsubscribe = store.subscribe(() => {
            const updatedSitting = JSON.parse(
                localStorage.getItem('SITTING') || ''
            );
            if (updatedSitting) {
                setSitting(updatedSitting?.sitting);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);
    const router = useRouter();
    useEffect(() => {
        const language = i18n.language;
        // console.log(language, "language");
        const savedLanguage = localStorage.getItem('language');
        if (language && language !== savedLanguage) {
            localStorage.setItem('language', language);
            i18n.changeLanguage(language);
            router.refresh();
        }
    }, [router]);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Register />
                <I18nextProvider i18n={i18n}>
                    {children}
                    <ToastContainer />
                </I18nextProvider>
            </PersistGate>
        </Provider>
    );
}
