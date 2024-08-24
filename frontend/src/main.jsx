import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../Redux/store/store.js'

// import { store, persistor } from '../Redux/store/store.js'
// import {PersistGate} from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(
 
  // <StrictMode>
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //     <App />
  //     </PersistGate>
  //   </Provider>
  // </StrictMode>,
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
