import 'semantic-ui-css/semantic.min.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'
import { StoreProvider } from 'store'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>
  ,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
