import React from "react";
import styled from "styled-components";


const H3 = styled.h3`
    font-size: 1.8rem;
    margin: 3% auto 0;
    display: flex;
    justify-content: center;
    color: #316e92;
`;

const P = styled.p`
    font-size: 1.4rem;
    margin: 0.5% auto;
    display: flex;
    justify-content: center;
    color: #316e92;
    font-weight: 700;
`;

const Button = styled.button`
    margin: 1% auto;
    padding: 0.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #316e92;
    color: #fff;
    font-size: 0.8rem;
    border-color: #66a7cc;
    font-weight: 600;
    font-size: 1em;
    letter-spacing: 1px;
`;

const Smurf = ({ item, killSmurf }) => {
    return (
        <div>
            <H3>Sacrifice: {item.name}</H3>
            <P>Age: {item.age}</P>
            <P>Height: {item.height}</P>
            <Button onClick={() =>
                killSmurf(item.id)}>{`Sacrifice ${item.name} to Gargamel`}
            </Button>
        </div>
    )
}

export default Smurf;