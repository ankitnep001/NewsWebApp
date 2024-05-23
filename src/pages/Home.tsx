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

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_442651a841b02fb6a3d977cbe6e7c87b5754f&language=en');
            setNews(response.data.results);
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
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_4169590e0811ce5d97f5fefab6ae1fa424b3d&language=en&category=business,entertainment,sports,technology');
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
        <div className=" mx-32">
            <div className="my-10">
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
