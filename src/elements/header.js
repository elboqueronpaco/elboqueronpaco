import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background-color: #2d2d2d;
    margin-bottom: 2rem
`
export const HeaderContainer = styled.section`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Menu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const LogoLink = styled(Link)`
    text-decoration: none;
    color: #FFF;
`
export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const MenuLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`
