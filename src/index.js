import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './App';



// import randomColor from "randomcolor";

import Icon from "./assets/icons";

const styles = {
};

const Test = () => (
  <div style={styles}>
    <Icon name="facebook" width={200} fill='#055'/>
    <Icon name="youtube" width={100} fill='#000' />
    <Icon name="linkedin" width={200} fill='#050'/>

  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));