
import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  Space: "jump",
  KeyD: "moveRight",
  KeyA: "moveLeft",
  Digit1: "dirt",
  Digit2: "grass",
  Digit3: "wood",
  Digit4:"glass"
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    wood: false,
    glass: false,
  });

  useEffect(() => {
    const handleKeyDown = event => {
      const { code } = event;
        const action = ACTIONS_KEYBOARD_MAP[code];
      if (action) {
        setActions((prevActions) => ({
          ...prevActions,
          [action]: true,
        }));
      }
    };

    const handleKeyUp = event => {
        const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];
      if (action) {
        setActions((prevActions) => ({
          ...prevActions,
          [action]: false,
        }));
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};
