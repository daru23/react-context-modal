import React from 'react';
// Components
import Mouse from './Mouse';
import CursorIcon from './CursorIcon';

export const MouseTracker = ({}) =>
    <div>
        <Mouse render={mouse => (<CursorIcon mouse={mouse}/>)} />
    </div>;

export default MouseTracker;