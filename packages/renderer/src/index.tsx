import * as React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './app';

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(<App />);
}
