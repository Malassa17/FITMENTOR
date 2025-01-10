import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import './login.css'

/*Page de login */

ReactSession.setStoreType("localStorage")

ReactSession.set('id', null)
ReactSession.set('identifier', null)

const Login = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [identifierError, setIdentifierError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const handleLogin = async () => {
        setIdentifierError('')
        setPasswordError('')

        if (identifier === '') {
            setIdentifierError('Veuillez entrer un identifiant')
            return
        }

        if (password === '') {
            setPasswordError('Veuillez entrer un mot de passe')
            return
        }

        try {
            const response = await axios.post('/login', {
                identifier: identifier,
                pass: password,
            })

            const result = response.data

            if (result[2] === 'Credentials ok, connecting ...') {
                navigate('/home')
                ReactSession.set('id', result[0])
                ReactSession.set('identifier', result[1])
            } else {
                setPasswordError('Mauvais identifiants, veuillez réessayer')
            }
        } catch (error) {
            console.error('Erreur lors de la connexion', error)
            setPasswordError('Erreur lors de la connexion. Veuillez réessayer plus tard')
        }
    }

    if (ReactSession.get('identifier') !== null){

        return (
            <><h1>Vous êtes connecté, bienvenue : {ReactSession.get('identifier')}</h1></>
        )
    }

    return (
        <>
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Se connecter</h2>
                <form className="auth-form">
                    <div className="form-group">
                        <label htmlFor="identifier" className="form-label">Identifiant</label>
                        <input
                            type="text"
                            id="identifier"
                            value={identifier}
                            placeholder="Entrez votre identifiant"
                            onChange={(ev) => setIdentifier(ev.target.value)}
                            className="form-input"
                        />
                        {identifierError && <span className="form-error">{identifierError}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Entrez votre mot de passe"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className="form-input"
                        />
                        {passwordError && <span className="form-error">{passwordError}</span>}
                    </div>

                    <button
                        type="button"
                        className="auth-button"
                        onClick={handleLogin}
                    >
                        Se connecter
                    </button>
                </form>
                <p className="auth-footer">
                    Pas encore de compte ? <a href="/signup" className="auth-link">Créer un compte</a>
                </p>
            </div>
        </div>
        </>
    )
}

export default Login