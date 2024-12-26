import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, onGetCategory }) => {
    const { images, isLoading } = useFetchGifs(category);

    const getCategory = (cat) => {
        onGetCategory(cat);
    }

    return (
        <>
            <div className="delete-container">
                <h3>{ category }</h3>
                {
                    isLoading && <h2>Cargando...</h2> 
                }
                <button className="delete-button" 
                        onClick={() => getCategory(category)}>
                    Delete
                </button>
            </div>
            <div className="container">
                {
                    images.length > 0 &&
                    images.map( (image) => (
                        <GifItem key={image.id} 
                                 {...image} // ESPARCE LAS PROPIEDADES EN EL COMPONENTE
                        />
                    ))
                }
            </div>
            
        </>
    )
}