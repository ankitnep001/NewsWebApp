import { image } from '@config/constant/image';
import axios from "axios";
import BusinessHero from "components/business/BusinessHero";
import { useEffect, useState } from "react";

const Bussiness = () => {
    const [businessNews, setBusinessNews] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchBusinessNews = async () => {
        try {
            // console.log('Fetching business news...');
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=business');
            // console.log('Response:', response.data);
            setBusinessNews(response.data.results);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (axios.isAxiosError(error)) {
                console.error('Error message:', error.message);
                console.error('Error response:', error.response);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    useEffect(() => {
        fetchBusinessNews();
    }, []);

    return (
        <div className=''>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <img src={image?.loader} alt="Loading..." className="loader w-52 h-52" />
                </div>
            ) : (
                <BusinessHero businessNews={businessNews} />
            )}
        </div>
    );
}

export default Bussiness;
