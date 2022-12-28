import React, {FC, useState} from 'react';
import styles from './ReadMore.module.css';

type ReadMoreProps = {
    text: string
    visibleLength: number
}
//ReadMoreProps Los componentes nos permiten dividir la interfaz de usuario en piezas independientes y reutilizables, y pensar en cada pieza de forma aislada.
const ReadMore: FC<ReadMoreProps> = ({text, visibleLength}) => {

    const initialText = text.slice(0, visibleLength + 1);
    const showButtonText = 'Lee mas...';
    const hideButtonText = 'Ocultar';
    //crear estados de las peliculas y series
    const [visible, setVisible] = useState(false);
    const [visibleText, setVisibleText] = useState(initialText);
    const [buttonText, setButtonText] = useState(showButtonText);
//seccion de los clicks para funciones de los clicks
    const clickHandler = () => {
        if (visible) {
            setVisible(false);
            setVisibleText(initialText)
            setButtonText(showButtonText);
        } else {
            setVisible(true);
            setVisibleText(text);
            setButtonText(hideButtonText);
        }
    }

    return (
        <div className={styles.wrapper}>
            {visibleLength < text.length ?
                <div>
                    <span className={styles.text}>
                       {visibleText}
                    </span>
                    <a href={'#'} className={styles.text_toggle} onClick={clickHandler}>{buttonText}</a>
                </div>
                :
                <div> {text} </div>
            }
        </div>
    );
};

export default ReadMore;