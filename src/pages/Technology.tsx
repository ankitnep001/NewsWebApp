
import { image } from "@config/constant/image";
import axios from "axios";
import TechHero from "components/techPage/TechHero";
import { useEffect, useState } from "react";
import { NewsProps } from "../types/global.types";

const Technology = () => {
    const [techNews, setTechNews] = useState<NewsProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const fetchTechNews = async () => {
        try {
            // console.log('Fetching business news...');
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=technology');
            // console.log('Response:', response.data);
            setTechNews(response.data.results);
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
        fetchTechNews();
    }, []);

    return (

        <div>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <img src={image?.loader} alt="Loading..." className="w-52 h-52 filter invert" />
                </div>
            ) : (
                <TechHero techNews={techNews} />
            )}
        </div>
    )
}

export default Technology