import React, { MouseEventHandler, useState} from 'react'
import { TodoModel } from '../models/todo';
import { TimerScreen } from './TimerScreen';

interface PomodoroProps {
    todo?: TodoModel;
    minutes: number;
    seconds: number;
    playToggleHandler: (start: boolean) => void;
    stopHandler: () => void;
}

export const Pomodoro: React.FC<PomodoroProps> = ({todo, minutes, seconds, playToggleHandler, stopHandler}) => {

    const [fullScreen, setFullScreen] = useState(true);

    return (
        <>
            {
                fullScreen 
                ? (
                    <div>
                        <h3>{todo?.text}</h3>
                        <TimerScreen minutes={minutes} seconds={seconds}/>
                        <div>
                            <span>{minutes}</span>
                            <span>{todo?.text}</span>
                            <button onClick={playToggleHandler.bind(null, false)}>Play / Pause</button>
                            <button onClick={stopHandler}>Stop</button>
                        </div>
                    </div>
                )
                : (
                    <div>
                        <span>{minutes}</span>
                        <span>{todo?.text}</span>
                        <button onClick={playToggleHandler.bind(null, false)}>Play / Pause</button>
                        <button onClick={stopHandler}>Stop</button>
                    </div>
                )

            }

        </>
    );
}