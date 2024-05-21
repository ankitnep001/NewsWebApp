import { image } from '@config/constant/image';
import React from 'react';
import './Hero.css';

interface HeroProps {
    news: any[];
}

const Hero: React.FC<HeroProps> = ({ news }) => {
    return (
        <div className='gridContainer'>
            <div className="box-1">
                <div>
                    <img src={news[0]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-full" />
                </div>
                <p className='font-bold'>{news[0]?.title}</p>
                <p>{news[0]?.description ? news[0]?.description.substring(0, 30) + '...' : ''}</p>
                <div className='flex gap-2'>
                    <p>{news[0]?.pubDate}</p>
                    <span className='font-bold'>|</span>
                    <p>{news[0]?.category}</p>
                </div>
                <hr />
            </div>

            {/* box2 */}
            <div className="box-2">
                <div>
                    <img src={news[1]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-full" />
                </div>
                <p className='font-bold'>{news[1]?.title}</p>
                <p>{news[1]?.description ? news[1]?.description.substring(0, 30) + '...' : ''}</p>
                <div className='flex gap-2'>
                    <p>{news[1]?.pubDate}</p>
                    <span className='font-bold'>|</span>
                    <p>{news[1]?.category}</p>
                </div>
                <hr />
            </div>

            {/* box3 */}
            <div className="box-3">
                <div>
                    <img src={news[2]?.image_url || image?.fallback} alt="img" className="object-cover w-full h-full" />
                </div>
                <p className='font-bold'><a href={news[2]?.link} target='_blank'>{news[2]?.title}</a></p>
                <p>{news[2]?.description ? news[2]?.description.substring(0, 100) + '...' : ''}</p>
                <div className='flex gap-2'>
                    <p>{news[2]?.pubDate}</p>
                    <span className='font-bold'>|</span>
                    <p>{news[2]?.category}</p>
                </div>
            </div>

            {/* box4 */}
            <div className="box-4 grid grid-rows-2">
                {/* subgrid 4.1 */}
                <div>
                    <p className='font-bold'>{news[3]?.title}</p>
                    <p>{news[3]?.description}</p>
                    <div className='flex gap-2'>
                        <p>{news[3]?.description ? news[3]?.description.substring(0, 30) + '...' : ''}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[3]?.category}</p>
                    </div>
                    <hr />
                </div>
                {/* subgrid 4.2 */}
                <div>
                    <p className='font-bold'>{news[4]?.title}</p>
                    <p>{news[4]?.description ? news[4]?.description.substring(0, 30) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{news[4]?.pubDate}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[4]?.category}</p>
                    </div>
                    <hr />
                </div>
            </div>

            {/* box5 */}
            <div className="box-5 grid grid-rows-2">
                {/* subgrid 5.1 */}
                <div>
                    <p className='font-bold'>{news[5]?.title}</p>
                    <p>{news[5]?.description ? news[5]?.description.substring(0, 30) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{news[5]?.pubDate}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[5]?.category}</p>
                    </div>
                    <hr />
                </div>
                {/* subgrid 5.2 */}
                <div>
                    <p className='font-bold'>{news[6]?.title}</p>
                    <p>{news[6]?.description ? news[6]?.description.substring(0, 30) + '...' : ''}</p>
                    <div className='flex gap-2'>
                        <p>{news[6]?.pubDate}</p>
                        <span className='font-bold'>|</span>
                        <p>{news[6]?.category}</p>
                    </div>
                    <hr />
                </div>
            </div>


        </div>
    );
};

export default Hero;
