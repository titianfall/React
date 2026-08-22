import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LandingPage from "./chapters/ch-09-conditional-redering/ex/LandingPage.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <LandingPage />
    </StrictMode>
);

