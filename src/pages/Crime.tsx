import { image } from "@config/constant/image";
import axios from "axios";
import CrimeHero from "components/crime/CrimeHero";
import { useEffect, useState } from "react";

const Crime = () => {
    const [crimeNews, setCrimeNews] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchCrimeNews = async () => {
        try {
            // console.log('Fetching entertainment news...');
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_442651a841b02fb6a3d977cbe6e7c87b5754f&language=en&category=crime  ');
            // console.log('Response:', response.data);
            setCrimeNews(response.data.results);
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
        fetchCrimeNews();
    }, []);
    return (
        <div className=''>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <img src={image?.loader} alt="Loading..." className="loader w-52 h-52" />
                </div>
            ) : (
                <CrimeHero crimeNews={crimeNews} />
            )}
        </div>


    )
}

export default Crime

