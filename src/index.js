import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Player } from './components/Player/Player';

import './styles.css';

function App() {
  return <Player />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
