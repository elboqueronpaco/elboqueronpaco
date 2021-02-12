import styled from 'styled-components'

export const FormSignIn = styled.form`
    width: 100%;
    background-color: #ddd;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem;
`
export const Input = styled.input`
    background-color: #fff;
    width: 100%;
    line-height: 2rem;
    border-radius: 5px;
    border: none;
`
export const TitleSigle = styled.h3`
    background-color: #ddd;
    padding: 2rem;
    width: 100%;
    margin: 0;
    text-align: center;
    
`
export const ButtonPrimary = styled.button`
    background-color: #2d2d2d;
    color: #ffffff;
    line-height: 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: .75;
    }
`
export const ButtonSecondary = styled.button`
    background-color: blue;
    color: #ffffff;
    line-height: 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: .75;
    }
`