import React from 'react'
import { buyCake } from '../redux'

import { connect } from 'react-redux'
function CakeContainer(props) {
    console.log(props)
    return (
        <div>
            <h2>Number Of Cake - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>

        </div>
    )
}

const mapStateToPros = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapDispatchToProps, mapStateToPros)(CakeContainer)
