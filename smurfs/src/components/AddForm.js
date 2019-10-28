import React, { useState } from "react";
import { makeSmurf, getSmurfs } from "../actions/smurfAction";
import { connect } from "react-redux";

const AddForm = (props) => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");

    const handleNameChanges= e => {
        setName(e.target.value);
    }

    const handleHeightChanges = e => {
        setHeight(e.target.value);
    }

    const handleAgeChanges = e => {
        setAge(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.makeSmurf(name, height, age);
        setAge("");
        setName("");
        setHeight("");
    }

    return (
        <div>
            <h2>Make a New Smurf for Smurf Village</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} placeholder="Name of New Smurf" onChange={handleNameChanges} />
                <input type="text" name="height" value={height} placeholder="Height in cm" onChange={handleHeightChanges} />
                <input type="text" name="age" value={age} placeholder="Age of Your Smurf" onChange={handleAgeChanges} />
                <button>Submit!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    makeSmurf,
    getSmurfs
}

export default connect(null, mapDispatchToProps)(AddForm);