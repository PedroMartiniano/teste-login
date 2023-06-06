import { useState, useEffect, useCallback } from "react";
import "./signin.css";
import logo from '../../images/logo-marca.svg'
import api from "../../lib/axios";
import { User } from "../../models/userData";

const Signin = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [dataUser, setDataUser] = useState<User[]>([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const usuario = { email, senha }

    const getUsers = useCallback(() => {
        api.get('/users').then((response) => { setDataUser(response.data); });
    }, []);

    useEffect(() => { getUsers() }, [getUsers])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let verif = false
        for (let i = 0; i < dataUser.length; i++) {
            if (usuario.email === dataUser[i].email && usuario.senha === dataUser[i].senha) {
                verif = true
                break
            }
        }
        setIsAuthenticated(verif)
    }

    return (
        <section>
            <div id="container">
                <header>
                    <img src={logo} alt="" />
                    <h1>ORDINIS</h1>
                </header>
                <form className="login" onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            onChange={(change) => setEmail(change.target.value)}
                        />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Senha"
                            onChange={(change) => setSenha(change.target.value)}
                        />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
                <p><a href="#">Não consegue entrar? Clique aqui!</a></p>
            </div>
        </section>
    )
}

export default Signin;