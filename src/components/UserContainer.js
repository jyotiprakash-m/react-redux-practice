import React, { useEffect } from 'react'
import { fetchUsers } from '../redux'
import { useSelector, useDispatch } from 'react-redux'
function UserContainer() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log("All Users data: ", users)
    useEffect(() => {

        dispatch(fetchUsers())

    }, [dispatch])
    return (
        <div>
            <h1>Users</h1>
            {
                users.loading === true ?
                    <img src='https://c.tenor.com/CHJqqkScLZMAAAAM/loading.gif' alt='Loading' />

                    :
                    <div className='users'>
                        {
                            users && users.users && users.users.length > 0 && users.users.map(user =>

                                <div key={user.id} className='user'>
                                    <h3>#{user.id} {user.name}</h3>
                                    <h4>Email: {user.email}</h4>
                                    <h4>Phone No: {user.phone}</h4>
                                    <h4>Username: {user.username}</h4>
                                    <h4>WebSite: {user.website}</h4>
                                </div>
                            )


                        }
                    </div>
            }
        </div>
    )
}

export default UserContainer
