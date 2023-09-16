'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/en');
  }, []);

  return <></>;
};

export default Page;
