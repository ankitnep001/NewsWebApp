import { image } from "@config/constant/image";
import { Link } from "react-router-dom";

const SportSection = ({ sportNews }: { sportNews: any[] }) => {

    if (!sportNews || sportNews.length === 0) {
        return null; // Return null or a message indicating no sport news available
    }
    const news = sportNews[0];
    return (
        <>
            <div className="">
                <hr className="border-2 border-black rounded-full " />
                <h1 className="font-bold text-2xl"><Link to='sport'>Sport</Link></h1>
                <div className="flex justify-between items-center">
                    <div className="flex justify-center flex-col w-[40%] p-2 my-2">
                        <p className="hover:underline text-2xl font-bold">{news?.title}</p>
                        <p>{news?.description}</p>
                        <button className="border-2 border-black p-1 w-[40%]"><a href={news.link} target="_blank">See More</a></button>
                    </div>
                    <div className="flex justify-center items-center w-[60%]">
                        <img src={news?.image_url || image?.fallback} alt={news?.title} className=" w-full h-[50%]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SportSection
