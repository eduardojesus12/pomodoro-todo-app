import React from 'react';

interface ModalProps {
    title: string;
    children?: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({title, children}) => {

    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>

    )
}