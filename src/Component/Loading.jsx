import React from 'react';
import Lottie from 'lottie-react';
import loading from '../assets/loading.json';

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="w-40 h-40">
                <Lottie animationData={loading} loop={true} />
            </div>
        </div>
    );
}
