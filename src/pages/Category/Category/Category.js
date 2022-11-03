import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    useTitle('Category')
    return (
        <div>
            <h3>This is category has news {categoryNews.length} </h3>

            {
                categoryNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
            
        </div>
    );
};

export default Category;