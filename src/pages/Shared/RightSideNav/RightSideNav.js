import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter,FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCrousel/BrandCarousel';
import { AuthContext } from '../../../Context/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {
    
    const {providerLogin} = useContext(AuthContext)
    const googleProvier = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvier)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch( error =>{
            console.log(error)
        })
    }
    const handleGithubSignIn = () =>{
        providerLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)

        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div>
            <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"> <FaGoogle className='me-3'></FaGoogle> Login with Google</Button>
        <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub className='me-3'></FaGithub> Login with Github</Button>
    </ButtonGroup>
        </div>
        <div className='mt-4'>
            <h5>Find us on </h5>
            <ListGroup>
      <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook></ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch></ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter></ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp></ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaLinkedin></FaLinkedin></ListGroup.Item>
    </ListGroup>
        </div>
        <div>
            <BrandCarousel></BrandCarousel>
        </div>
        </div>
    );
};

export default RightSideNav;