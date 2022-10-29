import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
console.log(news)
    return (
        <div>
            <h3>This is category has news {news.length} </h3>
        </div>
    );
};

export default Category;