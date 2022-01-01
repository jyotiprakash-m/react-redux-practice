import React from 'react'
import CakeContainerNew from './components/CakeContainerNew';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function Course() {
    return (
        <div>
            <HooksCakeContainer />
            <hr />
            <CakeContainerNew />
            <hr />
            <IceCreamContainer />
        </div>
    )
}

export default Course
