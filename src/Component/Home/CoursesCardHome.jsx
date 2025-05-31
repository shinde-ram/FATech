import React from 'react'
import { Link } from 'react-router-dom'

function CoursesCard({ category, list,bg }) {
    return (
        <div>
            <div>
                <div className="border-[0.25px]  w-[100%] sm:w-full hover:border-[#3D3D3D] lg:p-[32px] md:p-[24px] p-[20px] relative flex flex-row rounded-md overflow-hidden transition-all duration-200 bg-red-100">
                    <div className="flex flex-col md:w-[75%] w-[65%] ">
                        <div className="flex flex-row whitespace-nowrap lg:text-[26px] md:text-[22px] text-[20px] font-[700] md:leading-[34px] lg:leading-[36px] leading-[24px] ">
                            <div className="w-[260px] overflow-hidden">
                                {category}
                            </div>
                        </div>
                        <div className="flex flex-row items-start lg:pt-[20px] pt-[16px] flex-wrap md:w-[280px] w-[260px] overflow-y">
                            {list.map((element, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="md:text-[16px] cursor-pointer text-[14px] md:mr-[10px] mr-[7px] leading-[22px] my-[6px] lg:px-[24px] px-[16px] md:py-[12px] py-[9px] text-[#3D3D3D] text-center border border-[#d6a857] rounded-[28px]"
                                >
                                    {element}
                                </a>
                            ))}
                        </div>
                        <Link to={`/courses/${category}`} className="lg:mt-[24px] md:mt-[20px] mt-[16px] flex flex-row items-center hover:text-[#5A4BDA] duration-200 text-[#1B2124]">
                            <div className="cursor-pointer pr-[14px] lg:text-[18px] text-[16px] md:leading-[28px] leading-[22px]">
                                Explore More courses
                            </div>
                            <div className="bg-[#F8F8F8] duration-200 md:px-[14px] px-[12px] md:py-[6px] py-[6px] rounded-[100px] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z" fill="#1B2124"></path></svg>
                            </div>
                        </Link>
                    </div>
                    <div className=" flex items-center w-[35%] md:w-[25%] ">
                        <div className="md:h-[145%] h-[175%] relative aspect-square flex items-center rounded-full bg-blue-200">
                            <img alt="exam-category" width="40" height="40" decoding="async" data-nimg="1" className="md:w-[52px] group-hover:scale-110 transition-all duration-300 w-12 md:h-[52px] h-12 xl:w-[80px] xl:h-[80px] md:ml-12 xl:ml-10 ml-8 bg-center bg-cover bg-no-repeat scale-100" src={bg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CoursesCard
