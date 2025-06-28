// VisitorCounter.jsx
import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/resume-phi-ashen.vercel.app/visits')
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      });
  }, []);

  return (
    <div className="text-white text-lg font-semibold  flex items-center bg-black gap-2">
      👁️ Visitors: <span className="text-green-400">{count}</span>
    </div>
  );
};

export default VisitorCounter;
