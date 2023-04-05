import React from 'react';

export default function HelloWorld() {
    let name = 'CEE'

const user = {
    firstName :'Tuan',
    lastName:'Duong'
}

const formatName = (user)=>{
    return user.firstName +' '+user.lastName;
}

 return (
    <div>
        <div>HelloWorld {name} va {formatName(user)}</div>
        <div>{name === 'CEE'? 'Xin chào CEE':`xin chào${formatName(user)}`}</div>
    </div>
 );
}
