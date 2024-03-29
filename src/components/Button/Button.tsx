import React, {FC} from 'react';
import {ButtonProps} from "./Button.props";


const Button: FC<ButtonProps> = ({onClick, children, className, ...props}): JSX.Element => {
    return (
        <button onClick={onClick} className= "button button--outline button--add" {...props}
        >
            {children}
        </button>
    );
};

export default Button;