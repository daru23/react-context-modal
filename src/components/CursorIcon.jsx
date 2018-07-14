import React from 'react';

export const CursorIcon = ({mouse}) =>
    <div style={{position: 'absolute', left: mouse.x, top: mouse.y}}>
        <svg id="i-eye" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor"
             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="17" cy="15" r="1"/>
            <circle cx="16" cy="16" r="6"/>
            <path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z"/>
        </svg>
    </div>;

export default CursorIcon;
