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
          // Increment the counter
          const snapshot = await getDoc(ref);
          if (snapshot.exists()) {
            await updateDoc(ref, { value: increment(1) });
          } else {
            await setDoc(ref, { value: 1 });
          }
          sessionStorage.setItem("hasVisited", "true");
        }

        // Read the latest count
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

  // Don't render anything while loading or on error
  if (count === null && !error) return null;

  // Still show the badge even on error (with a fallback "—")
  return (
    <div className="flex justify-center bg-black py-4">
      <span className="bg-black text-green-400 px-5 py-2 rounded-full text-sm font-medium border border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.4)]">
        👀 Visitors: {error ? "—" : count}
      </span>
    </div>
  );
};

export default VisitorCounter;
