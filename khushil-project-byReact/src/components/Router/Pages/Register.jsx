import React from 'react'
import { useState } from 'react'
const Register = () => {

  const [user, setuser] = useState({
    username:"",
    email:"",
    password: "",
    phone:"",
  
  })

  const handleInput=(event)=>{
    setuser({...user,[event.target.name]: event.target.value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(user);
  }
  return (
    <>
    <section>
      <main>
        <div>
          <div className="container grid grid-col section-registration">
            <div className="registration-image">
              <img src="/public/Images/register.png" alt="" width={400} height={400} />
            </div>
            <div className="registration-form">
               <h1 className='main-heading mb-3'>Registration</h1>
               <br />
               <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={user.username} onChange={handleInput} placeholder="Enter your username" required/><br />
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={user.email} onChange={handleInput} placeholder="Enter your email" required/><br />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" value={user.password} onChange={handleInput} placeholder="Enter your password" required/><br />
                    <label htmlFor="phone">Phone:</label>
                    <input type="number" name="phone" id="phone" value={user.phone} onChange={handleInput} placeholder="Enter your number" required/><br />
                    <br />
                    <button className='btn btn-submit ' type="submit">Register now</button>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Register


