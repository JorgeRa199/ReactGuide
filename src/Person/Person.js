import React from 'react';

const person = (props) => {
    //return <p>Soy el george y tengo {Math.floor(Math.random() * 30)} anios </p>
    return <p>Soy {props.name} y tengo {props.age} anios </p>
}

export default person;