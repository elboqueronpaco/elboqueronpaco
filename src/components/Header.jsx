import React from 'react'
import { HeaderContainer, HeaderStyled, LogoLink, Menu, MenuLink, MenuList } from '../elements/header'

const Header = () => {
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
                            <li><MenuLink to='/signin'>Ingresar</MenuLink></li>
                        </MenuList>
                    </Menu>
                </aside>
            </HeaderContainer>
        </HeaderStyled>
    )
}

export default Header
