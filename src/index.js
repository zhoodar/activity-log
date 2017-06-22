import React from 'react';
import ReactDOM from 'react-dom';
import ActivityLog from './ActivityLog';
import registerServiceWorker from './services/registerServiceWorker';
import './stylesheets/index.css';

ReactDOM.render(<ActivityLog />, document.getElementById('root'));
registerServiceWorker();
