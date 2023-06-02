import { useState, useEffect } from "react";
import "./App.css";
import logo from './images/Logo-marca.svg'
import api from "./lib/axios";
// import {RoutesApp} from "./routes/routes";

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const usuario = {email, senha}

  return (
    <section>
      <div id="container">
        <header>
          <img src={logo} alt="" />
          <h1>Ordinis</h1>
        </header>
        <form className="login">
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
        </form>
        <button>Entrar</button>
        <p><a href="#">Não consegue entrar? Clique aqui</a></p>
      </div>
    </section>
  );
}

export default App;
