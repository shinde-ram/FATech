import React from 'react'
import AnimatedCard from './AnimatedCard'
import trained from '../../assets/trained-student-icon.png'
import placed from '../../assets/student-placed-icon.png'
import average from '../../assets/average-package-icon.png'
import company from '../../assets/company.png'
import bg from '../../assets/success.jpg'
// import video from '../../assets/success-stories.gif'
import success_icon from '../../assets/success-icon.jpg'

function NumberBox() {
    return (
        <div className='bg-contain  md:h-[90vh] flex-row justify-center mb-12 '
        // style={{ backgroundImage: `url(${bg})` }}

        >
            <div>
                <h2 className="text-5xl font-bold py-5 md:py-8 px-5 text-center text-black-600 " style={{ fontFamily: "'Emilys Candy', cursive" }} >Success That Speaks</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className="grid lg:grid-cols-2 grid-cols-2 gap-3 md:my-8 my-8 place-items-center w-full md:w-[50%]"
                >
                    <AnimatedCard
                        bgColor="bg-green-200"
                        digits={1500}
                        label="Student Trained"
                        imageUrl={trained}
                    />

                    <AnimatedCard
                        bgColor="bg-blue-200"
                        digits={1000}
                        label="Student Placed"
                        imageUrl={placed}
                    />

                    <AnimatedCard
                        bgColor="bg-yellow-200"
                        digits="4L"
                        label="Average Package"
                        imageUrl={average}
                    />

                    <AnimatedCard
                        bgColor="bg-purple-200"
                        digits={30}
                        label="Hiring Partners"
                        imageUrl={company}
                    />

                    {/* You can add more cards similarly */}
                </div>
                <div className='w-full md:w-[50%]  flex-col md:flex-row justify-center items-center '>
                    <img src={success_icon} alt="success" className='' />
                </div>
            </div>
        </div>
    )
}

export default NumberBox
