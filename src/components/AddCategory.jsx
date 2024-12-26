import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue] = useState('');

    /**
     * Método que funciona para obtener el valor del input y 
     * setearlo en el seInputValue de useState hook
     * @param {*} event: valor del input
     */
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    /**
     * Método que previene el refrescamiento de automáticamente
     * al momento de llamar el evento submit de un formulario
     * @param {*} event 
     */
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input type="text"
                   placeholder="Search gifs"
                   value={ inputValue }
                   onChange={ (event) => onInputChange(event) } />
        </form>
    )
}