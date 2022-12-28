import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";


//vista desplegable que se llama para desplegar un menu
const ProfileMenu:FC = () => {
    const data = [
        {text: 'Discusiones', url: '/u'},
        {text: 'Lista',url: '/u'},
        {text: 'Calificaciones', url: '/u'},
        {text: 'Lista de observación', url: '/u'},
        {text: 'Editar perfil', url: '/u'},
        {text: 'Parámetros', url: '/u'},
        {text: 'Salir', url: '/u'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default ProfileMenu;