import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    // CONSERVACIÓN DEL ESTADO
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // REGRESO DE ELEMENTOS DE UNA PROMESA
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }
}
