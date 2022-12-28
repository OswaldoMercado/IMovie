import React, {FC, useState} from 'react';
// @ts-ignore
import styles from './Button.module.css';

interface buttonProps {
    text: string
    width?:string
    height?:string
    callback?:(...args:any) => any
}
//realizar acciones del boton
const Button: FC<buttonProps> = ({text,width,callback,height}) => {
//se ponen los dos esttados del boton
    const [isActive, setIsActive] = useState<boolean>(false);
//hacer el cambio del boton al ser precionado
    const changeIsActive = (): void => {
        setIsActive(prev => !prev);
    }
//acciones al ser precionado
    return (
        <div>
            <button
            
                onClick={callback && callback}
                onMouseOver={changeIsActive}
                onMouseLeave={changeIsActive}
                className={isActive ? `${styles.btn} ${styles.active}` : styles.btn}
                style={{width,height}}>
                {text}
            </button>
        </div>
    );
};

export default Button;