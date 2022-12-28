import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import styles from './MenuItem.module.css';
//crear interfaz para poder utilizar en cualquier punto del proyecto
interface menuItemProps {
    text:string
    url:string
    ActionOnClick?:() =>{}
}
//menuItemProps sirve para hacer los render del proyecto
//despues hacemos las acciones que se ejecutan dentro de el menu item
const MenuItem:FC<menuItemProps> = ({text,url,ActionOnClick}) => {
    return (
        <div className={styles.item} onClick={ActionOnClick}>
            <NavLink to={url}>{text}</NavLink>
        </div>
    );
};

export default MenuItem;