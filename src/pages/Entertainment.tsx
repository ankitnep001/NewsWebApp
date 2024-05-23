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
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=entertainment  ');
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

