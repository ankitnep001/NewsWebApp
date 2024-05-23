import { image } from "@config/constant/image";
import { Link } from "react-router-dom";

const BusinessSection = ({ businessNews }: { businessNews: any[] }) => {
    if (!businessNews || businessNews.length === 0) {
        return null; // Return null or a message indicating no business news available
    }
    const news = businessNews[0];
    return (
        <>
            <div className="group my-6">
                <hr className="border-2 border-black rounded-full mb-4" />
                <h1 className="font-bold text-2xl mb-4"><Link to='business'>Business</Link></h1>
                <div className="flex flex-col md:flex-row justify-between items-center py-2">
                    <div className="flex justify-center items-center w-full md:w-[60%] mb-4 md:mb-0">
                        <img src={news?.image_url || image?.fallback} alt={news?.title} className="object-cover w-full h-80 group-hover:opacity-90" />
                    </div>
                    <div className="flex justify-center flex-col w-full md:w-[40%] p-2 my-2 leading-6">
                        <p className="group-hover:underline text-base md:text-xl lg:text-2xl font-bold">
                            <a href={news.link} target="_blank">{news?.title}</a>
                        </p>
                        <p className="mt-2">{news.description ? news.description.substring(0, 150) + '...' : ''}</p>
                        <button className="border-2 border-black p-1 w-[30%] mt-4 hover:bg-black hover:text-white">
                            <a href={news.link} target="_blank" rel="noopener noreferrer">See More</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessSection;
