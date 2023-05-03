import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {

    const { logIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation()
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('')

    const handleLogin = event => {


        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                navigate(from)
            })
            .catch(err=>{
                setError(err.message)
            })
    }

    return (
        <div className='container mx-auto  flex flex-col items-center'>
            <h1 className='text-5xl my-8'> Please Log in!!</h1>
            <form onSubmit={handleLogin} className='my-8 w-1/2  border border-orange-200 rounded-lg flex flex-col items-center'>
                <div>
                    <label htmlFor="email" className='block my-2 mt-4'>Email:</label>
                    <input type="email" name='email' required className='border-2 w-96 h-10 pl-2 border-orange-300 rounded-lg' />
                </div>
                <div>
                    <label htmlFor="password" className='block my-2'>Password:</label>
                    <input type="password" name='password' required className='border-2 w-96 h-10 pl-2 border-orange-300 rounded-lg' />
                </div>
                <p>{error}</p>
                <input type="submit" value="Submit" className='block btn mb-2 mt-5' />
                <p className=' mb-4'>Don't have an account? <Link to={'/register'} className='text-orange-500'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;