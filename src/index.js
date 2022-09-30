import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import './styles/index.scss';
import 'antd/dist/antd.css';


const appElement = document.getElementById('wrapper')

ReactDOM.render(<App />, appElement);