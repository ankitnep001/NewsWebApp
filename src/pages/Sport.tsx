import { image } from '@config/constant/image';
import axios from 'axios';
import SportHero from 'components/sportpage/SportHero';
import { useEffect, useState } from 'react';

const Sport = () => {
    const [sportNews, setSportNews] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchSportNews = async () => {
        try {
            // console.log('Fetching sport news...');
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=sports');
            // console.log('Response:', response.data);
            setSportNews(response.data.results);
            setIsLoading(false);
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
        <div>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <img src={image?.loader} alt="Loading..." className="loader w-20 md:w-52 h-20 md:h-52" />
                </div>
            ) : (
                <SportHero sportNews={sportNews} />
            )}
        </div>

    )
}

export default Sport