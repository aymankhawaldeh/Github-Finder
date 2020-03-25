import React from 'react';
import UserItems from './UserItems.js';
import Spinner from './Spinner.js'

const Users = ({users, loading})=>{  
         
        
    if(loading){
        return <Spinner />
    }  else {
        return(
            <div style={usetStyle}>
                {users.map(user =>(
                    < UserItems key={user.id} user = {user} />
                ))}
            </div>
        )
    }

     
          
        
    }



    
const usetStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
    export default Users;
