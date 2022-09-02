import { useEffect, useState } from 'react';

const useCountdown = (targetDate: number): [number, number, (start: boolean) => void, () => void] =>  {
  
  console.log('useCountDown')

  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState<number>(
    countDownDate
  );
  const [play, setPlay] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timer;
    console.log('useEffect')

    if (play) {
      interval = setInterval(() => {
        setCountDown(countDown => {
    
          if (countDown <= 0) {
            setPlay(false);
            return countDownDate;
          } else {
            return countDown - 1000
          }
          
        });
      }, 1000);
    } 
    return () => clearInterval(interval);
  }, [countDownDate, play]);

  const playToggleHandler = (start: boolean = false) => {

    if (start) {
      stopHandler()
      setPlay(true);
    } else {
      setPlay(play => !play);
    }
    
  }

  const stopHandler = () => {
    const countDownDate = new Date(targetDate).getTime();
    setCountDown(countDownDate);
    setPlay(false);
  }

  const values = getReturnValues(countDown);
  return [...values, playToggleHandler, stopHandler ];
};

const getReturnValues = (countDown: number): [number, number] => {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

export { useCountdown };
