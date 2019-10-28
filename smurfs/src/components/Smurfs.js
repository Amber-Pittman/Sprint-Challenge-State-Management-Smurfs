import React from "react";

const Smurf = ({ item, killSmurf }) => {
    return (
        <div>
            <h3>Name: {item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Height: {item.height}</p>
            <button onClick={() =>
                killSmurf(item.id)}>{`Sacrifice ${item.name} to Gargamel`}
            </button>
        </div>
    )
}

export default Smurf;