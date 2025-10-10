import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// const ResultModal = forwardRef(({ result, targetTime, ref }) => {
const ResultModal = ({ targetTime, ref, onReset, remainingTime }) => {
  // We will also need own ref here as well because now we need separate ref for reaching out to dialog because the idea now is to detach the dialog element from any other outer C

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // Now if the developer even changes dialog to div then she will changes here as well as it is easy to understand the logic behind this as it is in same place
      },
    };
  });

  return createPortal(
    // If dialog is open always by default like below then backdrop will never be visible; So we kind of need value that can be manipulated in TimerChallenge C for opening & closing the dialog in this C; for thay we can use forwardRefs directly forwaring the ref in Recat 19
    // <dialog className="result-modal" open>
    // Before using useImperativeHandle():below
    // <dialog className="result-modal" ref={ref}>
    // To make sure that onReset gets triggered when the dialog is closed via the escape key, you should add the built-in onClose prop to the <dialog> element and bind it to the onReset prop value.
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      {/* This form in HTML aloows to close the dialog HTML tag w/o our managing the state */}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    // We can pass where we want to teleport the dialog in doc
    document.getElementById("modal")
  );
};

export default ResultModal;
