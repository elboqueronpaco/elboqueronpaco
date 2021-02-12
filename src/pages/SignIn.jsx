import React, { useState } from 'react'
import { AlertError } from '../elements/Alert'
import { FormSignIn, Input, TitleSigle, ButtonPrimary, ButtonSecondary } from '../elements/FormSignIn'
import { MainContainer } from '../elements/main'
const initialState = {
    email: '',
    password: '',
    error: null,
    isSignIn: true
}
const SignIn = () => {
    const [email, setEmail] = useState(initialState.email)
    const [password, setPassword] = useState(initialState.password)
    const [error, setError] = useState(initialState.error)
    const [isSignIn, setIsSignIn] = useState(initialState.isSignIn)
    const handleOnSubmit = e => {
        e.preventDefault()
        if (!email.trim()) return setError('ingrese un email')
        if (!password.trim()) return setError('ingrese una contraseña')
        if (password.length <= 6) return setError('la contraseña debe ser mayor o igual de 6 caracteres')
        setError(null)
        console.log('toda va bien por ahora')
    }
    return (
        <MainContainer>
            <TitleSigle>
                { isSignIn ? 'Registro de Usuario' : 'Ingreasa...'}
            </TitleSigle>
            <FormSignIn onSubmit={handleOnSubmit}>
                {
                    error && (
                        <AlertError>{error}</AlertError>
                    )
                }
                <Input
                    type='email'
                    placeholder='correo...'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='contraseña...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                    <ButtonPrimary type='submit'>{!isSignIn ? 'Ingresa': 'Registrate'}</ButtonPrimary>
                    <ButtonSecondary
                    onClick={() => setIsSignIn(!isSignIn)}
                    >{isSignIn ? '¿Ya estas registrado?' : '¿Registrate a nosotro?'}</ButtonSecondary>
            </FormSignIn>
        </MainContainer>
    )
}

export default SignIn
