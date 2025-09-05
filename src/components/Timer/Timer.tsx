import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

    useEffect(() => {
        // create interval id in a variable
        
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log(`Interval - ${Date.now()}`);
    }, 1000);
        return () => {
            //2. Clear interval by its Id
            clearInterval(intervalId);
        }
  }, []);

  return <p>TimerBox - {time.toLocaleTimeString()}</p>;
}
