import React, { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/Authprovider';
const Profile = () => {
    const {user} =  useContext(AuthContext)


    const [name ,setName ] = useState(user.displayName)
    const photoURLREF = useRef(user.photoURL) 


    const handleSubmit = event =>{
        event.preventDefault()
         console.log(photoURLREF.current.value)
    }
    const handleChange = event =>{
        setName(event.target.value)
    }

    return (
        <div>
               <Form onSubmit={handleSubmit} className="my-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handleChange} defaultValue={name} type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control ref={photoURLREF} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Profile;