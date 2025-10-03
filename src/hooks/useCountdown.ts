import { useState, useEffect } from "react";

// Interface to define the shape of our countdown state
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = (targetDate: string): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const difference = targetTime - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]); // Rerun effect if targetDate changes

  return timeLeft;
};

export default useCountdown;