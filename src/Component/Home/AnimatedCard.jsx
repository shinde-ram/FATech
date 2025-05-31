import React from 'react';

const AnimatedCard = ({ bgColor, digits, label, imageUrl }) => {
  return (
    <div
      className={`relative group ${bgColor} lg:h-[30vh] w-[90%]  md:h-[200px] h-[158px] md:rounded-[16px] rounded-[10px] overflow-hidden border shadow-md shadow-gray-500`}
    >
      {/* Center Content (text) - moves to top on hover */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-12 transition-all duration-500 ease-in-out z-10 flex flex-col items-center"
      >
        <div className="lg:text-[40px] md:text-[38px] text-2xl font-bold" style={{ lineHeight: '55px' }}>
          {digits}+
        </div>
        <div className="md:text-lg text-sm text-[#3D3D3D] font-medium whitespace-nowrap">
          {label}
        </div>
      </div>

      {/* Bottom Image - slides up on hover */}
      <div
        className="absolute bottom-[-30px] group-hover:bottom-5 group-hover:scale-100 scale-0 transition-all duration-500 ease-in-out w-full h-[90px] bg-center bg-contain bg-no-repeat opacity-85"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
    </div>
  );
};

export default AnimatedCard;
