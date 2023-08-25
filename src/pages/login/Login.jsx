import React, { useState } from 'react'
import Illustration from "../../assets/images/right.jpg"
import logo from "../../assets/logo.png"
import { useForm } from "react-hook-form";
import './login.css'
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function handleClick(e) {
    console.log(e);
    let userData ={
      username:email,
      password:password
    }
    fetch('https://fakestoreapi.com/auth/login', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div className=" canvas">
      <div className='col-md-6 wrapper'>
        <div className="images">
          <img src={Illustration} alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit(handleClick)} data-toggle="validator" className='col-md-6 form-container d-flex flex-column align-content-center flex-wrap '>
          <div className=' m-auto text-center'>
            <img src={logo} alt="" srcset="" className='logo-login'/> <div className='food-delivary'> Food Delivery</div>
          </div>
        <div className="form-group col-md-9">
          <label htmlFor="inputEmail" className="control-label textFiled text-secondary-emphasis pt-4">Email</label>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="inputEmail"
            name='email'
            placeholder="Email"
            {...register("email",
              {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            data-error="Bruh, that email address is invalid"
            required
          />
          <div className="help-block with-errors">{errors.email && <p>Please check the Email</p>}</div>
        </div>
        <div className="form-group col-md-9">
          <label htmlFor="inputPassword" className="control-label textFiled text-secondary-emphasis pt-4">Password</label>
          <div className="form-inline">
            <div className="form-group">
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                data-minlength="6"
                name='password'
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}
                required
              />
              <div className="help-block with-errors">{errors.password && <p>Please check the Password</p>}</div>
            </div>
          </div>
        </div>
        <div className="form-group mt-5">
          <button type="submit" className="btn submit-btn">Submit</button>
        </div>
      </form>
    </div>

  )
}

export default Login