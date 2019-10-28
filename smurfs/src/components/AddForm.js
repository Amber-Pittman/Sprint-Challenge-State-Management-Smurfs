import React, { useState } from "react";
import { makeSmurf, getSmurfs } from "../actions/smurfAction";
import { connect } from "react-redux";
import styled from "styled-components";

const Form = styled.form`
    margin: 0 auto;
    width: 33%;
`;

const H3 = styled.h3`
    font-size: 1.8rem;
    margin: 3% auto 1%;
    display: flex;
    justify-content: center;
    color: #316e92;
`;

const Input = styled.input`
    margin: 1% auto;
    display: flex;
    justify-content: space-around;
    border: 3px solid #316e92;
    padding: 1%;
    border-radius: 2%;
`;

const Button = styled.button`
    margin: 0 auto 1%;
    padding: 2%;
    display: flex;
    justify-content: center;
    background-color: #316e92;
    color: #fff;
    border-radius: 50%;
    border-color: #66a7cc;
`;


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
            
            <Form onSubmit={handleSubmit}>
            <H3>Make a New Smurf for Smurf Village</H3>
                <Input type="text" name="name" value={name} placeholder="Name of New Smurf" onChange={handleNameChanges} />
                
                <Input type="text" name="height" value={height} placeholder="Height in cm" onChange={handleHeightChanges} />
                
                <Input type="text" name="age" value={age} placeholder="Age of Your Smurf" onChange={handleAgeChanges} />
         
                <Button>Submit!</Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = {
    makeSmurf,
    getSmurfs
}

export default connect(null, mapDispatchToProps)(AddForm);