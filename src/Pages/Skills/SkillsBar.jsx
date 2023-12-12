import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useRef, useState } from "react";

const SkillsBar = ({ technology, completed }) => {
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
    <div ref={ref}>
      <p className='text-white font-semibold text-lg ml-2 pb-2'>{technology}</p>
      {isVisible && (
        <ProgressBar
          completed={completed}
          baseBgColor='#2C494E'
          bgColor='#72E2AE'
          labelColor='#0F1F33'
          animateOnRender={true}
          transitionTimingFunction='ease-in-out'
          transitionDuration='2s'
        />
      )}
    </div>
  );
};

export default SkillsBar;
