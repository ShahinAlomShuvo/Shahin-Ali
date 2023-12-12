import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { useEffect, useRef, useState } from "react";

const SkillBox = ({ skill, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className='border px-10 py-5 border-gray-500 rounded bg-[#1B2336] flex flex-col justify-end items-center gap-5 w-80'>
      <div ref={ref} className='w-40'>
        {isVisible && (
          <ChangingProgressProvider values={skill}>
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  trailColor: "rgba(114, 226, 174,0.2)",
                  pathColor: `rgba(114, 226, 174,1)`,
                  textColor: "#f88",
                  textSize: "16px",
                  pathTransitionDuration: 1,
                })}
              />
            )}
          </ChangingProgressProvider>
        )}
      </div>
      <h3 className='text-white text-lg font-semibold'>{title}</h3>
    </div>
  );
};

export default SkillBox;
