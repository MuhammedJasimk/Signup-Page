import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import axios from "axios";

function SignUp(props) {

  const {user}=props

  const { register, handleSubmit, formState: { errors } } = useForm();
  function onSubmit(userdt) {
    let data = {
      first_name: userdt.first_name,
      username: userdt.username,
      last_name: userdt.last_name,
      email: userdt.email,
      password: userdt.password,
  }
{
  user=="fan"?
  axios.post('http://localhost:4001/api/user/fanSignup',data).then((response)=>{
    alert(response.data.message)
  })
  :
  axios.post('http://localhost:4001/api/user/talentSignup',data).then((response)=>{
    alert(response.data.message)
  })
}


  }


  return (
    <div className='d-flex justify-content-center'>


      <div className='col-md-6'>
        <h4 className='font-weight-normal text-white text-center'>Create Your Fan Account</h4>
        <form onSubmit={handleSubmit(onSubmit)}>


          <div className="mb-3 text-left">
            <div className='mb-1'>
              <label className="text-white text-left"  >
                First Name
              </label>

            </div>
            <div>
              <input className="rounded-pill w-100 bg-transparent  border border-success px-3 py-1 w-100"
                id="inline-full-name"
                placeholder='First Name'
                {...register("first_name", {
                  required: "required",
                  pattern: {
                    value: /^[A-Z]\w\D*$/i,
                    message: "Enter proper name"
                  }
                })} />
              <p className='text-danger font-[8px]'>{errors.first_name?.message}</p>
            </div>
          </div>

          <div className="mb-3 text-left">
            <div className='mb-1'>
              <label className="text-white text-left"  >
                Last Name
              </label>

            </div>
            <div>
              <input className="rounded-pill bg-transparent border border-success px-3 py-1  w-100"
                id="inline-full-name"
                placeholder='Last Name'
                {...register("last_name", {
                  required: "required",
                  pattern: {
                    value: /^[A-Z]\w\D*$/i,
                    message: "Enter proper name"
                  }
                })} />
              <p className='text-danger font-[8px]'>{errors.last_name?.message}</p>
            </div>
          </div>

          <div className="mb-3 text-left">
            <div className='mb-1'>
              <label className="text-white text-left"  >
                Username
              </label>

            </div>
            <div>
              <input className="rounded-pill bg-transparent border border-success px-3 py-1  w-100"
                id="inline-full-name"
                placeholder='username'
                {...register("username", {
                  required: "required",
                  pattern: {
                    value: /^[A-Z]\w\D*$/i,
                    message: "Enter proper name"
                  }
                })} />
              <p className='text-danger font-[8px]'>{errors.username?.message}</p>
            </div>
          </div>

          <div className="mb-3 text-left">
            <div className='mb-1'>
              <label className="text-white text-left"  >
                Email
              </label>

            </div>
            <div>
              <input type="email" className="rounded-pill bg-transparent border border-success px-3 py-1  w-100"
                id="inline-full-name"
                placeholder='Email'
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Enter proper email address"
                  }
                })} />
              <p className='text-danger font-[8px]'>{errors.email?.message}</p>
            </div>
          </div>

          <div className="mb-3 text-left">
            <div className='mb-1'>
              <label className="text-white text-left"  >
                Password
              </label>

            </div>

            <div>
              <input type="password" className="rounded-pill bg-transparent border border-success px-3 py-1  w-100"
                id="inline-full-name"
                placeholder='Password'
                {...register("password", {
                  required: "required",
                  pattern: {
                    value: /^(?=.*[a-zA-Z]).{8,}$/,
                    message: "Must contain 8 characters"
                  }
                })} />
              <p className='text-danger font-[8px]'>{errors.password?.message}</p>
            </div>
          </div>

          <p className='text-danger text-danger font-[8px]'>{errors.first_name?.message}</p>
          {/* <p className='text-danger font-[8px]'>{passwordErr}</p> */}
          <div className="text-cnter text-center">
            <button className="bg-theam p-2 border-0 rounded-pill" type="submit">
              SIGN UP
            </button>
            <p className='mt-3'><span className='text-white'> Already have an account ?</span> <span className='theamColor'>Login</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp