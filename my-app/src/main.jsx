import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ConfirmButton from "./chapters/ch08-eventHandling/ex/ConfirmButton.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <ConfirmButton />
    </StrictMode>
);

