import React, { useState } from 'react'
import axios from 'axios'
import './signup.css'

/*Page de signup */

const SignupForm = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [identifierError, setIdentifierError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault()

        setIdentifierError('')
        setPasswordError('')
        setSuccessMessage('')
        setErrorMessage('')

        let isValid = true

        if (!identifier) {
            setIdentifierError('L’identifiant est requis.')
            isValid = false
        }

        if (!password) {
            setPasswordError('Le mot de passe est requis.')
            isValid = false
        }

        if (!isValid) {
            return
        }

        try {
            const response = await axios.post('http://localhost:8080/signup', {
                identifier: identifier,
                pass: password,
            })

            if (response.data.success) { //donne forcement faux .....
                setSuccessMessage('Inscription réussie !')
                setIdentifier('')
                setPassword('')
            } else {
                setErrorMessage('Erreur : ' + response.data.message)
            }
        } catch (error) {
            setErrorMessage('Une erreur est survenue. Veuillez réessayer plus tard.')
            console.error(error)
        }
    }

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup} className="signup-form">
                <h2>Inscription</h2>
                <div className="input-group">
                    <label htmlFor="identifier">Identifiant</label>
                    <input
                        type="text"
                        id="identifier"
                        placeholder="Entrez votre identifiant"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="input"
                    />
                    {identifierError && <span className="error">{identifierError}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                    {passwordError && <span className="error">{passwordError}</span>}
                </div>
                <button type="submit" className="signup-button">
                    S’inscrire
                </button>
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    )
}

export default SignupForm
