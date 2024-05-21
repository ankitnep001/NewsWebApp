import axios from "axios";
import Hero from "components/home/hero/Hero";
import Herotest from "components/home/hero/Herotest";
import SportSection from "components/home/SportSection";
import { useEffect, useState } from "react";

const Home = () => {

    const [news, setNews] = useState<any[]>([]);

    const fetchNews = async () => {
        try {
            // console.log('fetching news');
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_442651a841b02fb6a3d977cbe6e7c87b5754f&language=en')
            setNews(response.data.results);
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error message:', error.message);
                console.error('Error response:', error.response);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    useEffect(() => {
        fetchNews()
    }, []);


    const getRandomSportsNews = (news: any[], count: number) => {
        const sportsNews = news.filter(article => article.category.includes('sports'));
        const randomSportsNews = [];
        for (let i = 0; i < count && i < sportsNews.length; i++) {
            const randomIndex = Math.floor(Math.random() * sportsNews.length);
            randomSportsNews.push(sportsNews[randomIndex]);
        }
        return randomSportsNews;
    };

    const sportNews = getRandomSportsNews(news, 1);

    return (
        <div className="mx-32">

            <div className="  my-10">
                {/* grid container */}
                <Hero news={news} />
            </div>

            <div >
                <Herotest />
            </div>

            {/* SportSection */}
            <div className="">
                <SportSection sportNews={sportNews} />
            </div>
        </div>
    )
}

export default Home