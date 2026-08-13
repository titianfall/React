import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Clock from "./chapters/ch04/Clock.jsx";

const root = createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <StrictMode>
            <Clock />
        </StrictMode>
    );
}, 1000);
