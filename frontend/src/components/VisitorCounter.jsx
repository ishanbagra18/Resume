import React, { useEffect, useState } from "react";
import db from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAndIncrement = async () => {
      try {
        const hasVisited = sessionStorage.getItem("hasVisited");
        const ref = doc(db, "counters", "resume-visits");

        if (!hasVisited) {
          const snapshot = await getDoc(ref);
          if (snapshot.exists()) {
            await updateDoc(ref, { value: increment(1) });
          } else {
            await setDoc(ref, { value: 1 });
          }
          sessionStorage.setItem("hasVisited", "true");
        }

        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          setCount(snapshot.data().value);
        } else {
          setCount(1);
        }
      } catch (err) {
        console.warn("Visitor counter failed:", err);
        setError(true);
      }
    };

    fetchAndIncrement();
  }, []);

  if (count === null && !error) return null;

  return (
    <div className="flex justify-center bg-black py-6 border-t border-zinc-900/60">
      <div className="inline-flex items-center gap-2.5 bg-zinc-950/80 border border-green-500/30 text-zinc-300 px-5 py-2 rounded-full text-xs font-mono shadow-[0_0_20px_rgba(34,197,94,0.15)]">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
        <span>Portfolio Visitors:</span>
        <span className="text-green-400 font-bold font-mono tracking-wider">
          {error ? "—" : count}
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;

