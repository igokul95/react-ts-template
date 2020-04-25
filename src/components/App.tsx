import React, { useEffect } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Store } from '../types';

import * as actions from '../actions'
import { connect } from 'react-redux';

type Props = {
  message: string;
  sampleAPI: () => void;
}

const App = (props: Props) => {
  useEffect(() => {
    props.sampleAPI()
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, {props.message}
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (store: Store) => {
  return ({
      message: store.sampleReducer.message,
  })
} 

export default connect(mapStateToProps, {
  sampleAPI: () => actions.sampleAsyncAction.request()
})(App);
