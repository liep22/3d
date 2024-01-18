import { useEffect, useState } from "react";

export const usePersonControls = () => {
    const keys = {
        Key: "forward",
        Key: "backward",
        Key: "left",
        Key: "right",
        Space: "jump"
    }

    const moveFieldByKey = (key) => keys[key];

    const [movement, setMovement] =  useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false
    });
    
    const setMovementStatus = (code, status) => {
        setMovement((m) => ({...m, [code]: status}))
    }

    useEffect(() => {
        const handleKeyDown = (ev) => {
            setMovementStatus(moveFieldByKey(ev.code), true);
        }

        const handleKeyUp = (ev) => {
            setMovementStatus(moveFieldByKey(ev.code), false);
        }
         
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
   
     return () => {
        document.removeEventListenerEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
     }
    }, []);
    
    return movement;
}