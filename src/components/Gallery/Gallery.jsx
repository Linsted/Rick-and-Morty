import  GalleryItem  from "components/GalleryItem/GalleryItem";
import PropTypes from 'prop-types';
import { GalleryStyled } from "./Gallery.styled";




 const Gallery = ({characters}) => { 

    return (
        <GalleryStyled> 
            <GalleryItem characters={characters} />
        </GalleryStyled>
    )
};

Gallery.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object.isRequired,).isRequired,
};

export default Gallery;
