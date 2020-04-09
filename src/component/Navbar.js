import React from 'react';
import {Link} from 'react-router-dom';




class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="navbar bg-primary">
                <h1>{this.props.title}</h1>
                <ul>
                    <li>
                    <Link to='/'>Home</Link></li>
                    <li>

                    <Link to='/about'>about</Link></li>

                </ul>
            </div>
            </React.Fragment>
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



