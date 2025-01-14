import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";


const MoreBtnMenu:FC = () => {
    const data = [
        {text: 'Añadir a la lista', url: '/leaderboard'},
        {text: 'Favoritos', url: '/leaderboard'},
        {text: 'Lista de observacion', url: '/leaderboard'},
        {text: 'Tu clasificación', url: '/leaderboard'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default MoreBtnMenu;