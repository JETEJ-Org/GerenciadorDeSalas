import React, { useState } from "react";
import "./Register.css";

const Cadastro = () => {

    const [marcar, setMarcar] = useState(
        { check1: "none", fill1: "#FFFFFF30", check2: "none", fill2: "#FFFFFF30" }
    );

    function marcar1() {
        setMarcar({ check1: "#3F8CFF", fill1: "#FFFFFF", check2: "none", fill2: "#FFFFFF30" });
    }

    function marcar2() {
        setMarcar({ check1: "#3F8CFF", fill1: "#FFFFFF", check2: "#3F8CFF", fill2: "#FFFFFF" });
    }

    return (
        <div className="register-body">
            <div className="register-main">
                <div className="register-card-esquerdo">
                    <h1>Vamos Começar</h1>
                    <div className="check">
                        <div className="done">
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16.373" r="15" fill={marcar.fill1} stroke="white" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M25.2048 11.2213C25.658 11.6746 25.6904 12.3894 25.3019 12.8801L25.2048 12.9891L16.3659 21.8279C15.9126 22.2812 15.1978 22.3136 14.7072 21.9251L14.5982 21.8279L9.29486 16.5246C8.8067 16.0365 8.8067 15.245 9.29486 14.7569C9.74815 14.3036 10.463 14.2712 10.9536 14.6597L11.0626 14.7569L15.4823 19.1752L23.437 11.2213C23.8903 10.768 24.6051 10.7357 25.0957 11.1242L25.2048 11.2213Z"
                                    fill={marcar.check1} />
                            </svg>
                            <h2>Seus Dados</h2>
                        </div>
                        <div className="linha-container">
                            <hr className="linha" />
                        </div>
                        <div className="done">
                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16.373" r="15" fill={marcar.fill2} stroke="white" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M25.2048 11.2213C25.658 11.6746 25.6904 12.3894 25.3019 12.8801L25.2048 12.9891L16.3659 21.8279C15.9126 22.2812 15.1978 22.3136 14.7072 21.9251L14.5982 21.8279L9.29486 16.5246C8.8067 16.0365 8.8067 15.245 9.29486 14.7569C9.74815 14.3036 10.463 14.2712 10.9536 14.6597L11.0626 14.7569L15.4823 19.1752L23.437 11.2213C23.8903 10.768 24.6051 10.7357 25.0957 11.1242L25.2048 11.2213Z"
                                    fill={marcar.check2} />
                            </svg>
                            <h2>Sua Instituição</h2>
                        </div>
                    </div>
                </div>
                <div className="register-card-direito">
                    <div className="register-cardireito-title">
                        <p>Passo 1/2</p>
                        <h1>Seus Dados</h1>
                    </div>
                    <div className="register-cardireito-form">
                        <form>
                            <div className="register-cardireito-form-input">
                                <label>Nome</label>
                                <input type="text" placeholder="Nome Completo" />
                            </div>
                            <div className="register-cardireito-form-input">
                                <label>Matrícula</label>
                                <input type="text" placeholder="Sua Matrícula" />
                            </div>
                            <div className="register-cardireito-form-input">
                                <label>Email</label>
                                <input type="email" placeholder="seuemail@gmail.com" />
                            </div>
                            <div className="register-cardireito-form-input">
                                <label>Senha</label>
                                <input type="password" placeholder="********" />
                            </div>
                        </form>
                    </div>
                    <div className="register-cardireito-footer">
                        <button className="button" onClick={marcar2}>Próximo &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
