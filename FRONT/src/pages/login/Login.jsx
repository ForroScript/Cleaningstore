import style from "./Login.module.css"
import Footer from "../../components/footer/Footer"
import Gmail from "./assets/gmail.png"
import Facebook from "./assets/facebook.png"

export default function Login() {
    return(
        <>
            <div id={style.containerPrincipal}>
                <div className={style.formularioLogin}>
                    <div className={style.tituloLogin}>
                        <h1>Acesse sua conta</h1>
                        <p>Novo cliente? Então registre-se <a href="/">aqui</a>.</p>
                    </div>
                    <div className={style.camposParaLogin}>
                        <div>
                            <label>Login *</label>
                            <input type="text" placeholder="Insira seu login ou email" />
                        </div>
                        <div>
                            <label>Senha *</label>
                            <input type="password" placeholder="Insira sua senha" />
                        </div>                  
                    </div>
                    <a className={style.esqueciMinhaSenha}>Esqueci minha senha</a>
                    <button>Acessar Conta</button>
                    <div>
                        <p>Ou faça login com</p>
                        <img src={Gmail} alt="simbolo do Gmail" />
                        <img src={Facebook} alt="simbolo do Facebook" />
                    </div>
                </div>
                <div className={style.imgsLogin}></div>

            </div>
            <Footer />
        </>
    )
}