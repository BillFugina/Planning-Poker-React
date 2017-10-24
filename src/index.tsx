import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
