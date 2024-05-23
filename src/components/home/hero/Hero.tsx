import { image } from "@config/constant/image";
// import formatDate from "@utils/formatdate.ts";
import formatDate from "../../../utils/formatdate";
interface HeroProps {
    news: any[];
}
const Hero: React.FC<HeroProps> = ({ news }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 leading-6">
            {/* first */}
            {/* grid grid-rows-2 */}
            <div className="col-span-1 gap-y-5 ">

                {/* box 1 */}
                <div className="">
                    <div>
                        <img src={news[0]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-full" />
                    </div>
                    <p className='font-bold hover:underline'><a href={news[0]?.link} target="_blank">{news[0]?.title}</a></p>
                    <p>{news[0]?.description ? news[0]?.description.substring(0, 30) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{formatDate(news[0]?.pubDate)}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[0]?.category}</p>
                    </div>
                    <hr />
                </div>

                {/* box-2 */}
                <div className="">
                    <div>
                        <img src={news[1]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-full" />
                    </div>
                    <p className='font-bold hover:underline'><a href={news[1]?.link} target="_blank">{news[1]?.title}</a></p>
                    <p>{news[1]?.description ? news[1]?.description.substring(0, 30) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{formatDate(news[1]?.pubDate)}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[1]?.category}</p>
                    </div>
                    <hr />
                </div>
            </div>

            {/* second */}
            <div className=" col-span-1 md:col-span-2 lg:col-span-2 mx-auto  ">
                {/* box-3 */}
                <div>
                    <img src={news[2]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-[60%]" />
                </div>
                <p className='font-bold hover:underline'><a href={news[2]?.link} target='_blank'>{news[2]?.title}</a></p>
                <p>{news[2]?.description ? news[2]?.description.substring(0, 100) + '...' : ''}</p>
                <div className='flex gap-2'>
                    <p>{formatDate(news[2]?.pubDate)}</p>
                    <span className='font-bold'>|</span>
                    <p>{news[2]?.category}</p>
                </div>
                <hr />
            </div>

            {/* third */}
            <div className="col-span-1 md:col-span-4 lg:col-span-1 grid grid-cols-1 md:grid-col-1 lg:grid-cols-1 gap-4">
                {/* box-4 */}
                <div>
                    <p className='font-bold hover:underline'><a href={news[3]?.link} target="_blank">{news[3]?.title}</a></p>
                    <p>{news[3]?.description ? news[3]?.description.substring(0, 60) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{formatDate(news[3]?.pubDate)}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[3]?.category}</p>
                    </div>
                    <hr />
                </div>

                {/* box-5 */}
                <div>
                    <p className='font-bold hover:underline'><a href={news[4]?.link} target="_blank">{news[4]?.title}</a></p>
                    <p>{news[4]?.description ? news[4]?.description.substring(0, 60) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{formatDate(news[4]?.pubDate)}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[4]?.category}</p>
                    </div>
                    <hr />
                </div>

                {/* box-6 */}
                <div>
                    <p className='font-bold hover:underline'><a href={news[5]?.link} target="_blank">{news[5]?.title}</a></p>
                    <p>{news[5]?.description ? news[5]?.description.substring(0, 60) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{formatDate(news[5]?.pubDate)}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[5]?.category}</p>
                    </div>
                    <hr />
                </div>

                {/* box-7 */}
                <div>
                    <p className='font-bold hover:underline'><a href={news[6]?.link} target="_blank">{news[6]?.title}</a></p>
                    <p>{news[6]?.description ? news[6]?.description.substring(0, 60) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{formatDate(news[6]?.pubDate)}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[6]?.category}</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Hero;
