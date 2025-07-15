import React from 'react';
import Image from 'next/image';

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='bg-brand p-10'>
            <div>
                <Image src="/favicon.ico" alt='logo' width={36} height={36} className="h-auto" />
                <div className='space-y-5 text-white'>
                    <h1 className='pt-4 text-[34px] font-bold leading-[42px]'>Manage your files the best way</h1>
                    <p className='text-[16px] font-normal leading-[24px]'>This is a place where you can store all your documents</p>
                </div>
            </div>
        </section>
      {children}
    </div>
  );
};

export default Layout;
