import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Subham','Kaustav','Subham','Kaustav']
    const nameList = names.map( (name , index) => <h2 key={index}>{index} {name}</h2> ) 
    return <div>{nameList}</div>

    /* const persons = [
        {
            aka : 'Marine',
            name : 'Subham',
            skill : 'python'
        },
        {
            aka : 'Marcos',
            name : 'Kaustav',
            skill : 'varendabhaja'
        }
    ]

    //We need to pass unique key props for every element of the list, key props can't be rendered in the child component
    const personList = persons.map( person => <Person key={person.aka} person ={person} /> )
    return <div>{personList}</div> */
}

export default NameList
