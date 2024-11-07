import { Button } from "./button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Home = ({ content }) => {
  const [counter, setCounter] = useState(0);
  const [isTimerOn, setTimer] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerOn) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup the timer when `isTimerOn` changes or component unmounts
  }, [isTimerOn]);
  /*
      useEffect(setup, dependencies?)

      setup: The function with your Effect’s logic. Your setup function may also 
      optionally return a cleanup function. When your component is added to the DOM, 
      React will run your setup function. After every re-render with changed dependencies, 
      React will first run the cleanup function (if you provided it) with the old values, 
      and then run your setup function with the new values. After your component is 
      removed from the DOM, React will run your cleanup function.
  */

  const navigate = useNavigate();
  const handleForward = () => {
    setCounter(counter + 1);
    navigate("/new-url");
  };

  const handleBack = () => {
    setCounter(counter + 1);
    navigate("/");
  };

  const handleTimerButton = () => {
    setTimer(!isTimerOn);
  };

  return (
    <>
      <p>{content}</p>
      <p>Counter: {counter}</p>
      <Button name="Forward" onClick={handleForward} />
      <Button name="Back" onClick={handleBack} />
      <Button name="Timer" onClick={handleTimerButton} />
    </>
  );
};
