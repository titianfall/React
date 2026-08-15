import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NotificationList from "./chapters/ch06-state-lifecycle/ex/NotificationList.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <NotificationList />
    </StrictMode>
);

