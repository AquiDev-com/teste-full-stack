'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

type loginData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<loginData>(); //dados dos inputs com react hooks forms
  const [message, setMessage] = useState<string | null>(null); //mensagem de erro

  const onSubmit = async (data: loginData) => {
    try {
      const response = await fetch('http://localhost/beercraft/login/index.php', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        //login bem-sucedido, redirecione para a página de listagem
        window.location.href = '/list';
      } else {
        const responseData = await response.json();
        setMessage(responseData.message);
      }
    } catch (error) {
      console.error('Error when making post request:', error);
      setMessage('Error when making post request.');
    }
  };

  return (
    <main
      className='flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12'
      style={{
        backgroundImage: 'url("/beer.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-dark-brown opacity-90 p-16 rounded-lg flex flex-col justify-center py-auto'
      >
        <h2 className='text-3xl pb-8 flex justify-center font-bold'>Hello, welcome back!</h2>
        <label htmlFor='email'>E-mail</label>
        <input
          {...register('email')}
          type='email'
          name='email'
          id='email'
          placeholder='Type your e-mail'
          className='mb-8 mt-2 bg-gray rounded text-dark-brown p-2 px-4'
        />

        <label htmlFor='password'>Password</label>
        <input
          {...register('password')}
          type='password'
          name='password'
          id='password'
          placeholder='Type your password'
          className='mb-4 mt-2 bg-gray rounded text-dark-brown p-2 px-4'
          required
        />

        {message && <div className='text-red-400'>{message}</div>}

        <button
          type='submit'
          className='bg-dark-green hover:bg-green mt-6 mb-4 p-2 rounded text-gray'
        >
          Access
        </button>
        <button
          type='submit'
          className='bg-dark-green hover:bg-green mt-4 mb-6 p-2 rounded text-gray'
        >
          <Link href='/create'>Create account</Link>
        </button>
      </form>
    </main>
  );
}
