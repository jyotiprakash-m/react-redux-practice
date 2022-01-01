import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'
function CakeContainerNew() {

    const [number, setNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Cake - {numOfCakes} </h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>Buy Cake</button>
        </div>
    )
}

export default CakeContainerNew
