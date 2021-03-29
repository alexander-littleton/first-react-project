import React, {useEffect} from "react"

const cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect")
        //Http request...
        const timer = setTimeout(() => {
            alert ("Saved data to cloud")
        }, 1000);
        return() => {
            clearTimeout(timer)
            console.log("[Cockpit.js] Cleanup work in useEffect")
        }
    }, []);

    useEffect(() =>{
        console.log("[Cockpit.js] 2nd useEffect")
        return() => {
            console.log("[Cockpit.js] cleanup work in 2nd useEffect");
        };
    });
    // const assignedClasses = [];
    // if(this.state.persons.length <= 2) {
    //   classes.push("red");
    // }

    // if (this.state.persons.length <=1) {
    //   classes.push("bold")
    // }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button  
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);  