import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { MainContainer } from '../elements/main'
import { auth } from '../firebase'

const Admin = (props) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (auth.currentUser) return setUser(auth.currentUser)
        props.history.push('/signin')
    }, [props.history])
    return (
        <MainContainer>
            {
                user && (
                    <p>{ user.email }</p>
                )
            }
        </MainContainer>
    )
}

export default withRouter(Admin)
