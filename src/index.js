import React from 'react';
import ReactDOM from 'react-dom';
import './form.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))