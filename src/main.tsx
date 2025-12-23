import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/home/index.tsx'
// import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')! as HTMLElement);
root.render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

// reportWebVitals();後で付与するか検討