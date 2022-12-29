import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";

//funciones desplegables de las series
const TVmenu:FC = () => {
    const data = [
        {text: 'Popular', url: '/tv/option/popular'},
        {text: 'Al aire hoy',url: '/tv/option/airing-today'},
        {text: 'En la televisión', url: '/tv/option/on-the-air'},
        {text: 'Mejor', url: '/tv/option/top-rated'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default TVmenu;