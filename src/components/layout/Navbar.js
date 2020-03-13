import React from 'react';


class Navbar extends React.Component{
    render (){
        return(
            <nav className='navbar bg-primary'>
                <h1>
                    {this.props.title}
                </h1>
            </nav>
        )
    }


}

export default Navbar;