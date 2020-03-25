import React from 'react';




class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar bg-primary">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default Navbar;







// const Navbar=(props)=>{
    
//         return(
//             <div className="navbar bg-primary">
//                 <h1>{props.title}</h1>
//             </div>
//         )
    
// }
// export default Navbar;



