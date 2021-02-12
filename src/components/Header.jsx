import React from 'react'
import { withRouter } from 'react-router-dom'
import { ButtonPrimary } from '../elements/FormSignIn'
import { HeaderContainer, HeaderStyled, LogoLink, Menu, MenuLink, MenuList } from '../elements/header'
import { auth } from '../firebase'

const Header = (props) => {
    const signOut = () => auth.signOut()
        .then(() => props.history.push('/signin'))
    return (
        <HeaderStyled>
            <HeaderContainer>
                <h1><LogoLink to='/'>elboqueronpaco</LogoLink></h1>
            
                <aside>
                    <Menu>
                        <MenuList>
                            <li><MenuLink to='/'>Inicio</MenuLink></li>
                        </MenuList>
                        <MenuList>
                            {
                                props.firebaseUser !== null ? (
                                    <>
                                        <li><MenuLink to='/admin'>Admin</MenuLink></li>
                                        <li><ButtonPrimary onClick={signOut} >cerrar</ButtonPrimary></li>
                                    </>
                                ) : (
                                        
                                    <li><MenuLink to='/signin'>Ingresar</MenuLink></li>
                                )
                            }
                        </MenuList>
                    </Menu>
                </aside>
            </HeaderContainer>
        </HeaderStyled>
    )
}

export default withRouter(Header)
