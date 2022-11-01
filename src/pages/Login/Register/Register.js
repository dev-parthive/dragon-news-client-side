import React, { useState } from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';

const Register = () => {


    const [error, setError] = useState(null);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext)
    const [accepted , setAccepted] = useState(false)


    const handleAccepted = (event) =>{
        setAccepted(event.target.checked)
        console.log(accepted)

    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form  = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( (reuslt) =>{
            const user = reuslt.user;
            console.log(user);
            form.reset()
            handleUpdateUserProfile(name, photoURL)
            handleEmailVerification()
            toast.success('Please verify your email address before login')
            setError("")
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })

        const handleUpdateUserProfile = (name, photoURL) =>{
            const profile = {
                displayName : name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
            .then( () =>{

            })
            .catch( error =>console.log(error))
        }
        const handleEmailVerification = () =>{
            verifyEmail()
            .then( () =>{
                
            })
            .catch(error => console.log(error))
        }


        
    }
    return (
        <div className='my-5'>
             <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
                <p className='text-danger'>{error}</p>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accecp tems and condition"  onClick={handleAccepted}/>
      </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;