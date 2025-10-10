import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;
// When we used timre then it will be same variable for multiple instances & would lead to unexpected issues & if we store this variable inside the C then it will be re-created when the C re-renders

const TimerChallenge = ({ title, targetTime }) => {
  //   const [timerStarted, setTimerStarted] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef(); // this ref timer will be different for differnt instances of this C & ref will not get re-created on re-render of C
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      //   setTimerExpired(true);
      //   But what if some another developer mistakenly changed the ResultModal dialog to div then showModal won't work, therefore it might be prefereable to build ResultModal C such that it exposes it own func that can be c/d w/ help of ref outside of that C & that func will work independent of dialog or div
      //   dialog.current.open(); // open is method in ResultModal
      setTimeRemaining((prevTimeRemainig) => prevTimeRemainig - 10);
    }, 10);
    // setTimerStarted(true);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      {/* Since we are not keeping dialog open everytime we don't need to conditionally render it */}
      {/* {timerExpired && ( */}
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      {/* )} */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
