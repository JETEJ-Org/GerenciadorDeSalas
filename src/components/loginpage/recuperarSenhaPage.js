import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import mensagemIcon from "../../assets/login/mensagem.png";

const RecuperarSenhaPage = () => {

    const navigate = useNavigate();

    // States
    const [emailInput, setEmailInput] = useState("");
    const [emailCodeAlert, setEmailCodeAlert] = useState("");
    const [emailCodeTime, setEmailCodeTime] = useState("");
    const [email, setEmail] = useState("");
    const [inputValue, setInputValue] = useState({ input1: '', input2: '', input3: '', input4: '' });

    // Verificar se o campo de código está vazio
    const sendCode = () => {
        if (inputValue.input1 === "" || inputValue.input2 === "" || inputValue.input3 === "" || inputValue.input4 === "") {
            setEmailCodeAlert("Por favor insira o seu código!");
            setEmail("");
            setEmailCodeTime("");
        } else {
            navigate('nova_senha');
        }
    };

    const enviarEmailCode = () => {
        if (emailInput === "") {
            setEmailCodeAlert("Por favor insira o seu email!");
            setEmail("");
            setEmailCodeTime("");
        } else {
            setEmailCodeAlert(`Código enviado para o email:`);
            setEmail(`${emailInput}`);
            setEmailCodeTime("Válido por 5 minutos");
        }

    }

    const handleInputChange = (event, nextInputId) => {
        let { id, value } = event.target;

        if (value.length > 1) {
            value = value.slice(-1);
        }

        setInputValue((prev) => ({ ...prev, [id]: value }));

        console.log("O valor do input mudou para:", value);

        if (value.length === 1 && nextInputId) {
            document.getElementById(nextInputId).focus();
        } else if (value.length === 1) {
            event.target.blur();
        }
    };

    return (

        <>
            <h2>Recuperar Senha</h2>
            <div className="recuperarForm">
                <fieldset className="recuperar-email-fieldset">
                    <legend>Email cadastrado</legend>
                    <input id="recuperar-email-input" type="email" placeholder="seuemail@gmail.com" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                    <button id="enviar-email-btn" className="button" onClick={enviarEmailCode}>Enviar</button>
                </fieldset>

                <fieldset className="recuperar-code-fieldset">
                    <legend>Insira o código recebido no email</legend>
                    <input type="number" required value={inputValue.input1} id="input1" onChange={(e) => handleInputChange(e, 'input2')} />
                    <input type="number" required value={inputValue.input2} id="input2" onChange={(e) => handleInputChange(e, 'input3')} />
                    <input type="number" required value={inputValue.input3} id="input3" onChange={(e) => handleInputChange(e, 'input4')} />
                    <input type="number" required value={inputValue.input4} id="input4" onChange={(e) => handleInputChange(e, null)} />
                </fieldset>

                <div className="recuperar-mensagem-container">
                    <div className="recuperar-mensagem-icon">
                        <img src={mensagemIcon} />
                    </div>

                    <div className="recuperar-mensagem">
                        <p>{emailCodeAlert}<br />{email}<br />{emailCodeTime}</p>
                    </div>
                </div>

                <button id="recuperar-btn" className="button" onClick={sendCode}>
                    Confirmar &rarr;
                </button>
            </div >
        </>

    );
};

export default RecuperarSenhaPage;
