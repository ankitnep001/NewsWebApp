import axios from "axios";
import BusinessSection from "components/home/BusinessSection";
import EntertainmentSection from "components/home/EntertainmentSection";
import SportSection from "components/home/SportSection";
import TechnologySection from "components/home/TechnologySection";
import Hero from "components/home/hero/Hero";
import { useEffect, useState } from "react";
import { NewsProps } from '../types/global.types';

const Home = () => {
    const [news, setNews] = useState<NewsProps[]>([]);
    const [categoryNews, setCategoryNews] = useState<NewsProps[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_isLoading, setIsLoading] = useState<boolean>(true);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_NEWS_API_URL}${import.meta.env.VITE_NEWS_API_KEY}&language=en`);
            setNews(response.data.results);
            setIsLoading(false);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error message:', error.message);
                console.error('Error response:', error.response);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    const fetchCategoryNews = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_NEWS_API_URL}${import.meta.env.VITE_NEWS_API_KEY}&language=en&category=business,entertainment,sports,technology,crime`);
            setCategoryNews(response.data.results);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error message:', error.message);
                console.error('Error response:', error.response);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    useEffect(() => {
        fetchNews();
        fetchCategoryNews();
    }, []);



    // Filter category news
    const sportNews = categoryNews.filter(article => article.category.includes('sports'));
    const businessNews = categoryNews.filter(article => article.category.includes('business'));
    const entertainmentNews = categoryNews.filter(article => article.category.includes('entertainment'));
    const technologyNews = categoryNews.filter(article => article.category.includes('technology'));

    return (
        <div className="mx-2 md:mx-32">
            <div className="my-5 md:my-10">
                <Hero news={news} />
            </div>

            <SportSection sportNews={sportNews} />
            <BusinessSection businessNews={businessNews} />
            <EntertainmentSection entertainmentNews={entertainmentNews} />
            <TechnologySection technologyNews={technologyNews} />
        </div>
    )
}

export default Home;
