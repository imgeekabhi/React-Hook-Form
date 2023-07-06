import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
const FormValidation = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log('Form submitted data', data);
  };
  return (
    <div className='container py-5'>
      <h3>Registration Form</h3>
      <div className='card border-0 shadow p-4 w-50 mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='form-group'>
            <label htmlFor='fullname'>Full Name</label>
            <input
              type='text'
              className='form-control'
              id='fullname'
              {...register('fullname', {
                required: 'Fullname is required',
                minLength: {
                  value: 3,
                  message: 'Name should be more then 2 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Name should be less then 20 characters',
                },
              })}
            />
            <div className='error'>{errors.fullname?.message}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Invalid email',
                },
                // custom validation
                validate: (fieldValue) => {
                  if (fieldValue === 'admin@example.com') {
                    return 'Enter a different Email Address';
                  }
                },
              })}
            />
            <div className='error'>{errors.email?.message}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='dob'>DOB</label>
            <input
              type='date'
              className='form-control'
              id='date'
              {...register('dob', {
                required: 'DOB is required',
              })}
            />
            <div className='error'>{errors.dob?.message}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='age'>Age</label>
            <input
              type='number'
              className='form-control'
              id='age'
              {...register('age', {
                valueAsNumber: true,
                required: 'Age is required',
              })}
            />
            <div className='error'>{errors.age?.message}</div>
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              {...register('password', { required: 'Password is required' })}
            />
            <div className='error'>{errors.password?.message}</div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default FormValidation;
