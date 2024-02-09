import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [user, setuser] = useState({
        email:"",
        password:"",
    })
    const handleChange=(event)=>{
        setuser({...user,[event.target.name]: event.target.value})
      }
      const handleSubmit=(event)=>{
        event.preventDefault();   //Form has a default behaviour to load when page is open,to stop this we use "preventDefault()"
        console.log(user);
      }
  return (
    <div>
      <section>
        <main>
            <div className="section-login">
                <div className="container grid grid-col">
                    <div className="login-image">
                        <img src="/public/Images/login.png" width={400} height={400} alt="" />
                    </div>
                    <div className="login-form">
                        <h1>User Login</h1>
                        
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div className='forms'>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" value={user.email} id="email" onChange={handleChange} required/><br />
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" value={user.password} onChange={handleChange} id="password" required/><br />
                                 <br />
                                 <button className='btn btn-submit' type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
      </section>
    </div>
  )
}

export default Login
