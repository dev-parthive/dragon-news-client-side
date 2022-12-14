import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {

const [error, setError] = useState(null)

    const navigate = useNavigate()
    const {signIn, setLoading, user} = useContext(AuthContext)
    const location = useLocation()

    useTitle('Login')


    const from = location.state?.from?.pathname || '/' ;
    

    const handleSignIn = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
            setError("")
            if(user){
                navigate(from , {replace:true}) ;
            }else{
                toast.error('Your email is not verified. Please verify your email')
            }
            

        })
        .catch( error=>{
            console.log(error)
            setError(error.message)
        })
        .finally(() =>{
            setLoading(false);
        })

    

    }
    useEffect( ()=>{
        if(user?.email){
            navigate(from , {replace:true}) ;
        }
    }  , [user])
    return (
        <div className='my-4'>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <p>New to this website ? <Link to="/register">Register</Link></p>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;