import React from 'react';
import ScrollVelocity from '../../Reactbits/ScrollVelocity/ScrollVelocity'; // ✅ Adjust relative path if needed

const AnimatedText = () => {
  const velocity = 50; // Example velocity, you can set dynamically

  return (

    <div className='flex items-center justify-center text-[200px] bg-black'>



    <div className='text-white max-w-[2000px] w-full '>
      <ScrollVelocity
        texts={['Dedicated', 'passionate', 'creative', 'innovative', 'curious']}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </div>


    </div>
  );
};

export default AnimatedText;
