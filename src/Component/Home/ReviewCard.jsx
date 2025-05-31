import React, { useState } from 'react'
import quote from '../../assets/double-quote-icon.png'

function ReviewCard({ img_url, review, name, college, course }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <div className="px-4 sm:px-6 xl:px-0 mt-10 pb-20">
                <div className="max-w-6xl mx-auto rounded bg-white shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-5 md:gap-8">

                    {/* Left: Banner Image with Play Icon */}
                    <div className="relative w-full md:w-[20%]">
                        <img
                            src={img_url}
                            alt="webBanner"
                            className="hover:scale-115 ease-in-out duration-300 w-full h-[166px] sm:h-[270px] sm:w-[780px] rounded-3xl object-contain cursor-pointer border-r-gray-400 md:border-r-2 pr-3 "
                        />
                    </div>

                    {/* Right: Testimonial */}
                    <div className="relative md:w-[80%]">
                        <img
                            src={quote}
                            alt="commaIcon"
                            className="w-10 h-7 mb-3.5"
                        />
                        <p className={isExpanded ? '' : 'line-clamp-5 md:line-clamp-none'}>
                            {review}
                        </p>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-blue-600 hover:underline text-sm md:hidden flex"
                        >
                            {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                        {/* Footer */}
                        <div className="lg:absolute bottom-0">
                            <div className="text-base font-bold text-[#1B2124] mb-1">{name} </div>
                            <div className="flex items-center gap-2">
                                <div className="text-xs text-[#5A4BDA] font-semibold border-r border-black pr-2">
                                    {college}
                                </div>
                                <div className="h-4 border-r border-gray-300"></div>
                                <div className="text-xs text-[#5A4BDA] font-semibold">{course}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ReviewCard
