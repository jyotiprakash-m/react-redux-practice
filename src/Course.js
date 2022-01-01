import React from 'react'
import CakeContainerNew from './components/CakeContainerNew';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';

function Course() {
    return (
        <div>
            <HooksCakeContainer />
            <hr />
            <CakeContainerNew />
            <hr />
            <IceCreamContainer />
            <hr />
            <UserContainer />
        </div>
    )
}

export default Course
