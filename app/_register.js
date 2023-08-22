'use client';

import cookieCutter from 'cookie-cutter';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import store from '../store';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [user, setUser] = useState(null);
    // const [cookie, setCookie] = useState(null)
    const [deviceId, setDeviceId] = useState(null);
    const [done, setDone] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        // setCookie(cookieCutter.get("clearence_session"))
        if (typeof window !== 'undefined') {
            const local = localStorage.getItem('BASE_URL');
            if (!local) {
                localStorage.setItem(
                    'BASE_URL',
                    process.env.NEXT_PUBLIC_BASE_URL_LIVE
                );
            } else {
            }
        }
    }, []);

    function generateDeviceId() {
        if (typeof window !== 'undefined') {
            const id = JSON.parse(
                localStorage.getItem('TOKEN_LOCAL_STORAGE')
            )?.deviceId;
            setDeviceId(id);
            return id;
        }
        return null;
    }

    const RegisterAsGuest = async (cookie) => {
        // if (!user && done) {
        const deviceId = generateDeviceId();
        if (!deviceId) {
            dispatch({
                type: 'REGISTER_GUEST',
                payload: { deviceId: null, cookie },
            });
            setUserInfo(true);
        } else {
            // console.log("deviceId")
            dispatch({
                type: 'FETCH_CUSTOMER_INFO',
                payload: { deviceId },
            });
        }
        // }
    };
    const getCookieAsync = async () => {
        return cookieCutter.get('clearence_session');
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cookie = await getCookieAsync();
                console.log(cookie, 'cookie1');
                RegisterAsGuest(cookie);
            } catch (error) {
                // Handle error if getCookieAsync fails
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const Token = JSON.parse(
                localStorage.getItem('TOKEN_LOCAL_STORAGE')
            )?.token;
            setUser(Token);
            setDone(true);
        }
    }, []);
    useEffect(() => {
        // console.log(user, "user");
        // console.log(router, "router");
        if (!user || user !== 'undefined') {
            // console.log("refresh");
            // window.location.reload();
        }
    }, [user]);

    return <></>;
};

export default Register;
