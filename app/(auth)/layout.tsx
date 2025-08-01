import React from 'react';
import Image from 'next/image';

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5'>
            <div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12'>
                <Image src="/assets/icons/logo-full.svg" alt='logo' width={150} height={40} className="h-auto" />
                <div className='space-y-5 text-white'>
                    <h1 className='text-[34px] font-bold leading-[42px]'>Manage your files the best way</h1>
                    <p className='text-[16px] font-normal leading-[24px]'>This is a place where you can store all your documents</p>
                    <Image src="/assets/images/files.png" alt='img' width={342} height={342} className='transition-all hover:rotate-3 hover:scale-105'/>
                </div>
            </div>
        </section>
        <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
            <div className='mb-16 lg:hidden'>
                <Image src="/assets/icons/logo-full-brand.svg" alt='logo' height={82} width={224} className='h-auto w-[200px] lg:w-[250px] '/>
            </div>
            {children}
        </section>
      
    </div>
  );
};

export default Layout;
