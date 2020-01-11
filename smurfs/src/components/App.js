import React, {useEffect } from "react";
//import "./App.css";
import styled from "styled-components";

import { connect } from "react-redux";
import { getSmurfs, makeSmurf, killSmurf } from "../actions/smurfAction";

import Smurfs from "./Smurfs";
import AddForm from "./AddForm";


const H1 = styled.h1`
  font-size: 4rem;
  margin: 2.5% auto 0;
  display: flex;
  justify-content: center;
  color: #316e92;
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  margin: 3% auto;
  display: flex;
  justify-content: center;
`;

const H20 = styled.h2`
    font-size: 2rem;
    margin: 3% auto 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5em;
    color: #316e92;
    width: 75%;
`;

function App(props) {
  useEffect(() => {
    props.getSmurfs()
  }, []);

    return (
      <div className="App">
        <H1>SMURFS!</H1>
        <H2>The most smurffed up time you'll ever have!</H2>
        <AddForm />
        
        <H20>Will You Make the Sacrifice for the Greater Good?</H20>
        {props.smurfArray.map(item => (
          <Smurfs item={item} key={item.id} killSmurf={props.killSmurf} />
        ))}
        
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
      smurfArray: state.smurfArray,
      isLoading: state.isLoading,
      error: state.error
    };
  }

  const mapDispatchToProps = {
    getSmurfs,
    makeSmurf,
    killSmurf
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
