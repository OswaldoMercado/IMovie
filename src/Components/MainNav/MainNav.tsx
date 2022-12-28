import React, {FC} from 'react';
import styles from './MainNav.module.css'
import NavItem from './NavItem/NavItem';
import MovieMenu from "../Common/MenuVariants/MovieMenu";
import TVmenu from "../Common/MenuVariants/TVmenu";
import PeopleMenu from "../Common/MenuVariants/PeopleMenu";
import Moremenu from "../Common/MenuVariants/MoreMenu";


//traer el menu con react usar el type React.FC, el cual es el nombre abreviado de React.FunctionComponent. Con esto el mensaje de Typescript que nos advierte de un children con tipo any desaparecerá
const MainNav:FC = () => {

    return (
        <div className={styles.wrapper}>
            <NavItem text={'Películas'} url={'/movies/option/popular'}>
                <MovieMenu/>
            </NavItem>
            <NavItem text={'Series'} url={'/tv/option/popular'}>
                <TVmenu/>
            </NavItem>
            <NavItem text={'Actores'} url={'person'}>
                <PeopleMenu/>
            </NavItem>
            <NavItem text={'add'} url={'#'}>
                <Moremenu/>
            </NavItem>
        </div>
    );
};

export default MainNav;

