import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Use your resume site domain as a unique namespace
    fetch("https://api.countapi.xyz/hit/resume-phi-ashen.vercel.app/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);

  return (
    <div className=" flex justify-center bg-black">
      <span className="bg-black text-green-400 px-5 py-2 rounded-full text-sm font-medium border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.4)]">
        👀 Visitors: {count}
      </span>
    </div>
  );
};

export default VisitorCounter;
