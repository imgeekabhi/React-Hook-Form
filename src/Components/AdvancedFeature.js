import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
const AdvancedFeature = () => {
  // validation modes:- onSubmit(by default), onBlur, onChange, all
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      doesHaveEmail: false,
      dob: new Date(),
      age: 0,
      password: '',
    },
    mode: 'all',
  });
  const { register, control, handleSubmit, formState, reset, trigger, watch } =
    form;

  const { errors, touchedFields, dirtyFields, isDirty } = formState;
  //   console.log(touchedFields);
  //   console.log(dirtyFields);
  //   console.log(isDirty);
  const watchCheckBox = watch('doesHaveEmail');

  const onSubmit = (data) => {
    console.log('Form submitted data', data);
  };
  return (
    <div className='container py-5'>
      <h3>Registration Form</h3>
      <div className='card border-0 shadow p-4 w-50 mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='form-group'>
            <label className='labels' htmlFor='fullname'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='fullname'
              {...register('fullname', {
                required: 'Fullname is required',
                minLength: {
                  value: 3,
                  message: 'Name should be more then 3 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Name should be less then 20 characters',
                },
              })}
            />
            <div className='error'>{errors.fullname?.message}</div>
          </div>
          {watchCheckBox || (
            <div className='form-group'>
              <label className='labels' htmlFor='email'>
                Email address
              </label>
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
          )}
          <div className='form-check'>
            <input
              type='checkbox'
              id='doesHaveEmail'
              className='form-check-input'
              {...register('doesHaveEmail', {})}
            />
            <label className='form-check-label labels' htmlFor='doesHaveEmail'>
              Don't have email
            </label>
          </div>
          <div className='form-group'>
            <label className='labels' htmlFor='dob'>
              DOB
            </label>
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
            <label className='labels' htmlFor='age'>
              Age
            </label>
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
            <label className='labels' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              {...register('password', { required: 'Password is required' })}
            />
            <div className='error'>{errors.password?.message}</div>
          </div>

          <button
            type='button'
            className='btn btn-primary'
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => {
              trigger(['fullname', 'password']);
            }}
          >
            Trigger
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default AdvancedFeature;
