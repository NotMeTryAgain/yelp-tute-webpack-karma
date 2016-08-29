import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
// import styles from './styles.module.css'
import App from 'containers/App/App'

import 'font-awesome/css/font-awesome.css'


const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
