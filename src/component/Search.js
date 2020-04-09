import React, { useState } from 'react';
import {Link , NavLink} from 'react-router-dom';

const Search =({setAlert , clearUsers , searchUsers , showClear})=> {
       
    const [text, setText] = useState('');
    

  const  onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
          setAlert('Please enter something' , 'light')
        }else{

            
          searchUsers(text)
          setText('');
        }
    }
   const onChange = (e) =>{

        // let text = e.target.value;
        // this.setState({text})
        setText(e.target.value)

        
      }
        return ( 
            <div>
                <form className="form" onSubmit={   onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..."  onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear &&(
                                   < button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> 


                )}
            </div>
         );
    
}
 
export default Search ;



    