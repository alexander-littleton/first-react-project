import React from "react"

const cockpit = (props) => {
    // const assignedClasses = [];
    // if(this.state.persons.length <= 2) {
    //   classes.push("red");
    // }

    // if (this.state.persons.length <=1) {
    //   classes.push("bold")
    // }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button  
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit