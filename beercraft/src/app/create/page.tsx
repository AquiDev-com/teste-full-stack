'use client';
import React, { useState } from 'react';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';

export type accountData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm: string;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm<accountData>({
    mode: 'onBlur',
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<accountData> = async (data: accountData) => {
    try {
      var bodyData = new FormData();

      bodyData.append('name', data.name);
      bodyData.append('email', data.email);
      bodyData.append('phone', data.phone);
      bodyData.append('password', data.password);
      bodyData.append('confirm', data.confirm);

      // Configuração da solicitação POST
      const requestOptions = {
        method: 'POST',
        body: bodyData,
      };

      // Faça a solicitação POST para o servidor XAMPP
      const response = await fetch('http://localhost/beercraft/account/index.php', requestOptions);

      if (response.ok) {
        // Se a resposta for bem-sucedida, você pode lidar com a resposta aqui
        const responseData = await response.json(); // Use .json() para obter os dados da resposta

        if (responseData.status === 'success') {
          // Cadastro bem-sucedido, defina a mensagem de sucesso
          setSuccessMessage('Cadastro realizado com sucesso. Por favor aguarde!');
          // Aguarde alguns segundos e depois redirecione para a tela de login
          setTimeout(() => {
            window.location.href = '/login'; // Redirecione para a tela de login
          }, 1000); // Redirecione após 3 segundos (ajuste conforme necessário)
        } else {
          // Cadastro falhou, mostre a mensagem de erro
          console.error('Erro no cadastro:', responseData.message);
        }
      } else {
        // Se a resposta não for bem-sucedida, lide com o erro aqui
        console.error('Erro na solicitação POST:', response.status, response.statusText);
      }
    } catch (error) {
      // Lide com erros de solicitação, se necessário
      console.error('Erro ao fazer a solicitação POST:', error);
    }
  };

  // Adicione uma validação personalizada para a confirmação de senha
  const password = watch('password');
  const confirm = watch('confirm');
  const isPasswordMatch = password === confirm;

  const onError: SubmitErrorHandler<accountData> = errors => console.log(errors);

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
        onSubmit={handleSubmit(onSubmit, onError)}
        className='bg-dark-brown opacity-90 w-full md:w-1/2 lg:w-1/3 bg-opacity-50 py-8 p-4 md:p-8 rounded-lg flex flex-col gap-4 justify-center mt-24'
      >
        <h2 className='text-2xl md:text-3xl font-bold text-center '>Create Account</h2>

        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <input
            {...register('name', { required: 'The name is required' })}
            type='text'
            name='name'
            id='name'
            placeholder='Type your e-mail'
            className='bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('name')}
          />
          {errors.name && <span className='text-red-400  '>{errors.name.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email', { required: 'The email is mandatory' })}
            type='email'
            name='email'
            id='email'
            placeholder='Type your email'
            className=' bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('email')}
          />
          {errors.email && <span className='text-red-400  '>{errors.email.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='phone'>Phone</label>
          <input
            {...register('phone', { required: 'The phone is mandatory' })}
            type='tel'
            name='phone'
            id='phone'
            placeholder='Type your phone'
            className=' bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('phone')}
          />
          {errors.phone && <span className='text-red-400  '>{errors.phone.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            {...register('password', {
              required: 'The password is mandatory',
              minLength: {
                value: 4,
                message: 'Password must be at least 4 characters long',
              },
            })}
            type='password'
            name='password'
            id='password'
            placeholder='Type your password'
            className='bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('password')}
          />
          {errors.password && <span className='text-red-400  '>{errors.password.message}</span>}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='confirm'>Confirm Password</label>
          <input
            {...register('confirm', { required: 'The confirm password is mandatory' })}
            type='password'
            name='confirm'
            id='confirm'
            placeholder='Type your confirm-confirm'
            className='bg-gray rounded text-dark-brown p-2 px-4'
            onClick={() => clearErrors('confirm')}
          />
          {/* Exiba a mensagem de erro se a confirmação de senha não coincidir com a senha */}
          {!isPasswordMatch && <span className='text-red-400'>Passwords do not match</span>}
        </div>

        <button type='submit' className='bg-dark-green hover:bg-green mt-4 p-2 rounded text-white '>
          Create Account
        </button>

        {successMessage && <div className='text-green-400'>{successMessage}</div>}
      </form>
    </main>
  );
}
