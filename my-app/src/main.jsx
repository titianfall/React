import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AttendanceBook from "./chapters/ch10-list-key/ex/AttendanceBook.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <AttendanceBook />
    </StrictMode>
);

