import React, {Component} from 'react';
import './Person.css';


class Person extends Component {
    render() {
        console.log("[Person.js] rendering...")
        return (
            <div className="Person">
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}/>
            </div>
        )
    
    }
}

export default Person;