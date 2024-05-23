import { image } from "@config/constant/image";
import { Link } from "react-router-dom";

const EntertainmentSection = ({ entertainmentNews }: { entertainmentNews: any[] }) => {
    if (!entertainmentNews || entertainmentNews.length === 0) {
        return null;
    }
    const news = entertainmentNews[0];
    return (
        <>
            <div className="">
                <hr className="border-2 border-black rounded-full " />
                <h1 className="font-bold text-2xl"><Link to='entertainment'>Entertainment</Link></h1>
                <div className="flex justify-between items-center py-2">
                    <div className="flex justify-center flex-col w-[40%] p-2 my-2">
                        <p className="hover:underline text-2xl font-bold"><a href={news.link} target="_blank">{news?.title}</a></p>
                        <p>{news.description ? news.description.substring(0, 150) + '...' : ''}</p>
                        <button className="border-2 border-black p-1 w-[30%] mt-1 hover:bg-black hover:text-white"><a href={news.link} target="_blank">See More</a></button>
                    </div>
                    <div className="flex justify-center items-center w-[60%]">
                        <img src={news?.image_url || image?.fallback} alt={news?.title} className="object-cover w-full h-80" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EntertainmentSection
