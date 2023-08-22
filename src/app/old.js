'use client';
import { NextRequest, NextResponse, userAgent } from 'next/server';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.reload(window.location.pathname);
  }, []);
  return <></>;
}
