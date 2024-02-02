import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './Store/store';
import { BrowserRouter } from 'react-router-dom';
import { AuthMiddleware } from 'services/helpers/AuthMiddleware';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="WaterTracker">
        <AuthMiddleware>
          <App />
        </AuthMiddleware>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
