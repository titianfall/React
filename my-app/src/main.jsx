import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Accommodate from './chapters/ch07-hook/ex/Accommodate.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Accommodate />
    </StrictMode>
);

