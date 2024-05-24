import React, { useEffect, useState } from "react";

interface CrimeProps {
    crimeNews: any[];
}

// for ramdom 6 news 
const getRandomNews = (news: any[], count: number) => {
    const random = news.sort(() => 0.5 - Math.random());
    return random.slice(0, count);
};

const CrimeHero: React.FC<CrimeProps> = ({ crimeNews }) => {
    const [randomCrimeNews, setCrimeNews] = useState<any[]>([]);

    useEffect(() => {
        if (crimeNews) {
            setCrimeNews(getRandomNews(crimeNews, 6));
        }
    }, [crimeNews]);

    return (
        <div className="container  mx-auto py-8">
            <h1 className="text-4xl font-bold mb-6">Entertainment News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {randomCrimeNews.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <img src={article.image_url} alt={article.title} className="group-hover:opacity-90 w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="group-hover:underline text-xl font-semibold md:text-red mb-2">{article.title}</h2>
                            <p className="text-gray-700 flex-grow">
                                {article.description ? article.description.substring(0, 30) + '...' : ''}
                            </p>

                            <p className="text-gray-500 text-sm mt-2 ">Published on:{article.pubDate}</p>
                            <div className=" bottom-0 text-right">
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className=" text-blue-500 hover:underline mt-4">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default CrimeHero
