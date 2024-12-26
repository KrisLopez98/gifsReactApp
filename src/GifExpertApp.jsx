import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.length === 0) {
            setCategories([ newCategory, ...categories ]);
        } else {
            const filterCategory = categories.find((category) => category.toLowerCase() === newCategory.toLowerCase());
            if(filterCategory) return;
            setCategories([ newCategory, ...categories ]);
        }
    }

    const onDeleteCategory = (category) => {
        console.log(category);
        const newArr = [...categories.filter(item => item !== category)];
        console.log(newArr);
        setCategories([...newArr]);
    }

    return (
        <>
            <>
                <img src="hamster.png" alt="" className='logo' /> 
                <h1>GifExpertApp </h1>
            </>
       
            <AddCategory onNewCategory={ event => onAddCategory(event)}/>
            
            {
                categories.length === 0 ? (
                    <div className='notification-container'>
                        <img src="fox.png" alt="" />
                        <p className='notification-title'>There are no categories.</p>
                        <p className='notification-subtitle'>Please search for one.</p>
                    </div>
                    
                ) : categories.map(( category ) => (
                        <GifGrid key={ category } category={ category } onGetCategory={ event => onDeleteCategory(event)}/> 
                    ))
            }
        </>
    )
}