import React, {FC} from 'react';

type YoutubeProps = {
    url:string
}
// YoutubeProps;sirve para traer la vista de youtube y determinamos desde el tamaño y el ancho y como se van a mostrar
const YoutubeEmbed:FC<YoutubeProps> = ({url}) => {
    return (
        <div className="video-responsive">
            <iframe
                width="300"
                height="170"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"

            />
        </div>
    );
};

export default YoutubeEmbed;