import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
  targetDate: string;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center">Registration Closes In:</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-primary/50 rounded-lg py-3 px-2">
              <span className="text-3xl font-bold">{unit.value}</span>
            </div>
            <span className="text-sm mt-1">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;