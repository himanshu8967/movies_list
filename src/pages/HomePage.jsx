import React from 'react';
import MoviesList from '../components/MoviesList'
import { json, useLoaderData } from "react-router-dom";

const HomePage = () => {
    const data = useLoaderData();
   
    return (
        <div>
            <MoviesList movies={data} />
        </div>
    );
};

export default HomePage;

// Loader function for fetching movie list
export async function loader() {
    const response = await fetch('https://dummyapi.online/api/movies', {
        method: 'GET',
    });

    if (response.status === 200) {
        const data = await response.json();
        return data;
    }

    if (response.status === 404) {
        return json({ message: 'Movies not found' }, { status: 404 });
    }

    if (response.status === 500) {
        return json({ message: 'Internal Server Error' }, { status: 500 });
    }

    return json({ message: 'Failed to load movies', status: response.status }, { status: response.status });
}
