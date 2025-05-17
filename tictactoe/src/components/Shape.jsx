// import { useState } from 'react';

export default function Square({value}, {clickHandler}) {
    // use useState to handle value of square 
    // const [value, setValue] = useState(null);

    // add handleClick object to Square
    // function handleClick() {
    //     console.log('clicked!');
    //     setValue('X');
    // }

    return (
    <button 
        className="square"
        onClick={clickHandler} // here, we add handleClick to the button object 
    >
        {value}
    </button>
    );
}