import axios from "axios";
import EntertainmentHero from "components/entertainmentPage/EntertainmentHero";
import { useEffect, useState } from "react";

const Entertainment = () => {
    const [entertainmentNews, setEntertainmentNews] = useState<any[]>([]);

    const fetchEntertainmentNews = async () => {
        try {
            // console.log('Fetching entertainment news...');
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=entertainment  ');
            // console.log('Response:', response.data);
            setEntertainmentNews(response.data.results); // Adjust this line based on your API response structure
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
        <>
            <EntertainmentHero entertainmentNews={entertainmentNews} />
        </>
    )
}

export default Entertainment

// https://newsdata.io/api/1/news?apikey=pub_442651a841b02fb6a3d977cbe6e7c87b5754f&language=en&category=entertainment 