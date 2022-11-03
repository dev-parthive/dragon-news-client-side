import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

import {FaEye, FaRegBookmark, FaShareAlt, FaStar, } from 'react-icons/fa'
import useTitle from '../../../hooks/useTitle';


const NewsSummaryCard = ({news}) => {
    console.log(news)
    const {author, category_id, details, image_url, published_date, rating, thumbnail_url, title, total_view, _id, } = news 

    return (
        <Card className=" mb-5">
        <Card.Header className='d-flex  justify-content-between align-items-center'>
           <div className='d-flex'>
            <Image  
            className='me-2'
        src={author?.img}
        style={{height: '60px'}}
        roundedCircle
>
            </Image>
            <div>
                <p className='mb-0'>{author?.name}</p>
                <p>{author?.published_date}</p>
            </div>
           </div>
           <div>
            <FaRegBookmark ></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
           </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <>
            {details.length > 200 ? 
        <p>{details.slice(0,255) + '....'} <Link to={`/news/${_id}`}>Reade More</Link></p>   :
        <p>{details}</p>   
        }
          </>
          
        </Card.Body>
        <Card.Footer className=" d-flex justify-content-between">
        <div>
            <FaStar className='text-warning '></FaStar>
            <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
            <FaEye className='me-2'></FaEye>
            <span>{total_view}</span>


        </div>

        </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCard;