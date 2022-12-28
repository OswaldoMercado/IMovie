import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";

//vista desplegable que se llama para desplegar un menu
const PeopleMenu:FC = () => {
    const data = [{text: 'Gente popular', url: '/person'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default PeopleMenu;