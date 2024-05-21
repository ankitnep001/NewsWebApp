import axios from 'axios';
import SportHero from 'components/sportpage/SportHero';
import { useEffect, useState } from 'react';

const Sport = () => {
    const [sportNews, setSportNews] = useState<any[]>([]);

    const fetchSportNews = async () => {
        try {
            // console.log('Fetching sport news...');
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=sports');
            console.log('Response:', response.data);
            setSportNews(response.data.results); // Adjust this line based on your API response structure
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error message:', error.message);
                console.error('Error response:', error.response);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    useEffect(() => {
        fetchSportNews();
    }, []);

    return (
        <>
            <div className='mx-32'>
                <SportHero sportNews={sportNews} />
            </div>
        </>

    )
}

export default Sport