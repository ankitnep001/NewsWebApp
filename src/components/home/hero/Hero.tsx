import { image } from "@config/constant/image";
import formatDate from "../../../utils/formatdate";

interface HeroProps {
    news: any[];
}

const Hero: React.FC<HeroProps> = ({ news }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  leading-6">
            {/* Secondary Articles in the First Column */}
            <div className="col-span-1 space-y-5">
                {[1, 2].map((index) => (
                    <div key={index} className="group">
                        <div className="relative">
                            <img src={news[index]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-48 md:h-64 lg:h-80 group-hover:opacity-90" />
                        </div>
                        <div className="p-4">
                            <h2 className="text-sm md:text-lg lg:text-xl font-bold group-hover:underline ">
                                <a href={news[index]?.link} target="_blank" rel="noopener noreferrer">{news[index]?.title}</a>
                            </h2>
                            <div className="hidden md:block">
                                <p>{news[index]?.description ? news[index]?.description.substring(0, 50) + '...' : ''}</p>
                                <div className="flex gap-2 text-sm">
                                    <p>{formatDate(news[index]?.pubDate)}</p>
                                    <span className="font-bold">|</span>
                                    <p>{news[index]?.category}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>

            {/* Main Feature Article */}
            <div className="group col-span-1 md:col-span-2 lg:col-span-2 relative">
                <div className="relative group md:content-center">
                    <img src={news[0]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-64 md:h-96 lg:h-[30rem] group-hover:opacity-90" />
                </div>
                <div className="p-4">
                    <h2 className="text-sm md:text-lg lg:text-xl font-bold group-hover:underline">
                        <a href={news[0]?.link} target="_blank" rel="noopener noreferrer">{news[0]?.title}</a>
                    </h2>
                    <p className="hidden md:block">{news[0]?.description ? news[0]?.description.substring(0, 100) + '...' : ''}</p>
                    <div className="flex gap-2 text-sm">
                        <p>{formatDate(news[0]?.pubDate)}</p>
                        <span className="font-bold">|</span>
                        <p>{news[0]?.category}</p>
                    </div>
                </div>
                <hr />
            </div>

            {/* Additional Articles in the Third Column */}
            <div className="col-span-1 md:col-span-4 lg:col-span-1 space-y-5">
                {[3, 4, 5, 6].map((index) => (
                    <div key={index} className="group">
                        <div className="p-4">
                            <h2 className="text-sm md:text-lg lg:text-xl font-bold group-hover:underline">
                                <a href={news[index]?.link} target="_blank" rel="noopener noreferrer">{news[index]?.title}</a></h2>
                            <div className="hidden md:block">
                                <p>{news[index]?.description ? news[index]?.description.substring(0, 60) + '...' : ''}</p>
                                <div className="flex gap-2 text-sm">
                                    <p>{formatDate(news[index]?.pubDate)}</p>
                                    <span className="font-bold">|</span>
                                    <p>{news[index]?.category}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;
