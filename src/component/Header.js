import React from 'react';

// function Header(){
//     return(
//         <h2>Hello, Function base component</h2>
//     );
// }


const Header = (props) =>{
    return(
        <div>
            <h2>Hello, {props.name} - {props.last}</h2>
            {props.children}
        </div>
    );
}

// export const Header = () =>{
//     return(
//         <h2>Hello, Function base component</h2>
//     );
// }

export default Header;
