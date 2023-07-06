import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
const BasicForm = () => {
  const form = useForm();
  //------------------------------------
  // set default value in form fields
  // const form = useForm({
  //   defaultValues: {
  //     fullname: 'Abhishek Sharma',
  //     email: '',
  //     dob: new Date(),
  //     age: 0,
  //     password: '',
  //   },
  // });
  //-------------------------------------
  // set default value from api in form fields
  // const form = useForm({
  //   defaultValues: async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  //     const data = await res.json();
  //     return {
  //       fullname: data.name,
  //       email: data.email,
  //       dob: new Date(),
  //       age: 0,
  //       password: '',
  //     };
  //   },
  // });
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;
  const regObj = register('fullname');
  console.log(regObj);
  const onSubmit = (data) => {
    console.log('Form submitted', data);
  };

  return (
    <>
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
                {...register('fullname')}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='email'
                {...register('email')}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='dob'>DOB</label>
              <input
                type='date'
                className='form-control'
                id='date'
                {...register('dob')}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='age'>Age</label>
              <input
                type='number'
                className='form-control'
                id='age'
                {...register('age')}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                {...register('password')}
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};

export default BasicForm;
