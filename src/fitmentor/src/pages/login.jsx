import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

var currentClient = null

function setCurrentClient(client) {
  currentClient = client
}

function getCurrentClient() {
  return currentClient
}

const Login = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [identifierError, setIdentifierError] = useState('')
    const [passwordError, setPasswordError] = useState('')
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
            const response = await axios.post('http://localhost:8080/login', {
                identifier: identifier,
                pass: password,
            })

            const result = response.data

            if (result === 'Credentials ok, connecting ...') {
                console.log('ALLOK')
                navigate('/')
                setCurrentClient(result.id)
                console.log(currentClient)  //TODO UNDEFINED
            } else {
                console.log('NOTOK :', result)
                setPasswordError('Mauvais identifiants, veuillez réessayer')
            }
        } catch (error) {
            console.error('Erreur lors de la connexion', error)
            setPasswordError('Erreur lors de la connexion. Veuillez réessayer plus tard')
        }
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Se connecter</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={identifier}
                    placeholder="Identifiant"
                    onChange={(ev) => setIdentifier(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{identifierError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Mot de passe"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={handleLogin} 
                    value={'Se connecter'}
                />
            </div>
        </div>
    )
}

export default Login
