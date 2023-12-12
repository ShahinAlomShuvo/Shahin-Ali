import { useState, useEffect } from "react";

import "react-circular-progressbar/dist/styles.css";

const ChangingProgressProvider = ({ values, interval, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    if (valuesIndex === 0) {
      intervalId = setInterval(() => {
        setValuesIndex((prevIndex) => (prevIndex + 1) % values.length);
      }, interval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [valuesIndex, values, interval]);

  return children(values[valuesIndex]);
};

ChangingProgressProvider.defaultProps = {
  interval: 1000,
};

export default ChangingProgressProvider;
