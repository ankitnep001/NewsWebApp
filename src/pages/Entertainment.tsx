import { image } from "@config/constant/image";
import axios from "axios";
import EntertainmentHero from "components/entertainmentPage/EntertainmentHero";
import { useEffect, useState } from "react";

const Entertainment = () => {
    const [entertainmentNews, setEntertainmentNews] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchEntertainmentNews = async () => {
        try {
            // console.log('Fetching entertainment news...');
            const response = await axios.get(`${import.meta.env.VITE_NEWS_API_URL}${import.meta.env.VITE_NEWS_API_KEY}&language=en&category=entertainment`);
            // console.log('Response:', response.data);
            setEntertainmentNews(response.data.results);
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
        fetchEntertainmentNews();
    }, []);
    return (

        <div className=''>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <img src={image?.loader} alt="Loading..." className="loader w-52 h-52" />
                </div>
            ) : (
                <EntertainmentHero entertainmentNews={entertainmentNews} />
            )}
        </div>

    )
}

export default Entertainment

