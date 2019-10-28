import React, {useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import { getSmurfs, makeSmurf, killSmurf } from "../actions/smurfAction";

import Smurfs from "./Smurfs";
import AddForm from "./AddForm";


function App(props) {
  useEffect(() => {
    props.getSmurfs()
  }, []);

    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <h2>The most smurfingest time you'll ever have!</h2>

        {props.smurfArray.map(item => (
          <Smurfs item={item} key={item.id} killSmurf={props.killSmurf} />
        ))}
        
        <AddForm />
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
