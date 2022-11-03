import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useTitle from '../../../hooks/useTitle';
const News = () => {
    const news = useLoaderData()
    console.log(news)
    const {autor, category_id, details, image_url, others_info, rating, thumbnail_url, title, total_view, _id} = news;
    useTitle('News')
    return (
        <div>
           <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        
        <Button variant="primary"  > All news in  this Category</Button>
        </Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default News;