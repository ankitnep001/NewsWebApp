import React, { useEffect, useState } from 'react';

interface SportProps {
    sportNews: any[];
}

// for ramdom 6 news 
const getRandomNews = (news: any[], count: number) => {
    const random = news.sort(() => 0.5 - Math.random());
    return random.slice(0, count);
};

const SportHero: React.FC<SportProps> = ({ sportNews }) => {

    const [randomSportNews, setRandomSPortNews] = useState<any[]>([]);

    useEffect(() => {
        if (sportNews) {
            setRandomSPortNews(getRandomNews(sportNews, 6));
        }
    }, [sportNews]);





    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-6">Sport News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {randomSportNews.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold md:text-red mb-2">{article.title}</h2>
                            <p className="text-gray-700">
                                {article.description ? article.description.substring(0, 30) + '...' : ''}                            </p>
                            <p className="text-gray-500 text-sm mt-2">Published on {article.pubDate}</p>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className=" text-blue-500 hover:underline mt-4 inline-block">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportHero;
