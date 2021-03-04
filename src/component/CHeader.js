import React from 'react';


// class CHeader extends React.Component{
//     render(){
//         return(
//             <div>
//                 CHeader component here
//             </div>
//         )
//     }
// }


class CHeader extends React.Component{
    render(){
        return(
            <div>
                {this.props.name} - {this.props.last}
            </div>
        )
    }
}

export default CHeader;


