import React from 'react';
import Lottie from 'lottie-react';
import loading from '../assets/loading.json';

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="w-40 h-40">
                <Lottie animationData={loading} loop={true} />
            <p className='text-center text-xl'>Loading...</p>
                </div>
        </div>
    );
}
