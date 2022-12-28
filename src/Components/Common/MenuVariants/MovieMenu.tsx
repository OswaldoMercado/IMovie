import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";

//vista desplegable que se llama para desplegar un menu
const MovieMenu:FC = () => {
    const data = [
        {text: 'Popular', url: '/movies/option/popular'},
        {text: 'Viendo ahora',url: '/movies/option/now-playing'},
        {text: 'Previsto', url: '/movies/option/upcoming'},
        {text: 'Mejor', url: '/movies/option/top-rated'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default MovieMenu;