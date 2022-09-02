import React, { useState } from 'react';

interface TimerScreenProps {
    minutes: number;
    seconds: number;
}

export const TimerScreen: React.FC<TimerScreenProps> = ({minutes, seconds}) => {

    return (
        <div>
            <h1>{minutes} : {seconds}</h1>
            <div>
                Circulo
            </div>
        </div>
    )
}