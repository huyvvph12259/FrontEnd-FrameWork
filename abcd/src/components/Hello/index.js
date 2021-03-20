import React from 'react'
function NbList(props){
    const students = props.students;
    const listN = students.map(({name}) =>(
    <div>{name}</div>));
    return(
        <div>{listN}</div>
    )
}


export default NbList
