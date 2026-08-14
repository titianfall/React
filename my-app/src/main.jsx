import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CommentList from "./chapters/ch05-component-props/ex/CommentList.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <CommentList />
    </StrictMode>
);

