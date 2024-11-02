 /* Esta é uma página de links em jsx, considerando que já tenho um index e um app.js rodando,
  crie essa página como uma sub página, onde ela em sim ja esta completa, sem necessidade de montar varios componentes */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Avatar from '../assets/img/avatar.png';

const LinkPage = () => {
    return (
        <HelmetProvider>
        <Helmet>
        <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" />
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
                <title>@meunome</title>
                <style>{`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
}

html{
    height: 100vh;
    font-size: 14px;
}

body{
    background-color: #282828;
    height: 100%;
}

.container{
    height: 100%;
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    color: #fff;
}

a{
    text-decoration: none;
    color: #fff;
}

.degrade{
    background: linear-gradient(to right, #FE4701, #FF0054);
}

/* ESTILO DO HEADER */

header{
    text-align: center;
    margin-bottom: 40px;
}

header img{
    max-width: 150px;
    margin-bottom: 20px;
    border-radius: 50%;
}

header h1{
    font-size: 2em;
    margin-bottom: 10px;
    color: #5e5e5e;
    font-weight: 300;
}

/* ESTILO DOS BOTÕES */

section.botoes-links{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

a.link button{
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    border-radius: 30px;
    font-size: 1.2em;
    cursor: pointer;
    color: #fff;
    transition: .2s;
}

a.link i{
    font-size: 1.5em;
}

a.link button:hover, footer a.btn-footer:hover{
    transform: scale(1.05);
}

/* ESTILO DO FOOTER */

footer{
    text-align: center;
    margin: 30px;
}

footer a.btn-footer{
    width: 60px;
    height: 60px;
    display: inline-block;
    font-size: 2em;
    line-height: 60px;
    border-radius: 50%;
    margin: 0 10px;
    transition: .2s;
}
                `}</style>
        </Helmet>
        <div className="container">
        <header>
            <img src={Avatar} alt="Minha foto do perfil" />
            <h1>@euthiagoafonso</h1>
            <p>Gestor de tráfego e <br></br>Desenvolvedor de Software Full Stack .NET</p>
        </header>

        <section className="botoes-links">
            <a href="/" target="_blank" className="link">
                <button className="degrade">
                    <span>CyberMarketing</span>
                    <i class="bi bi-rocket-takeoff-fill"></i>
                </button>
            </a>

            <a href="https://github.com/ThiagoDev25" target="_blank" className="link">
                <button className="degrade">
                    <span>Contato</span>
                    <i class="bi bi-whatsapp"></i>
                </button >
            </a>

            <a href="https://linkedin.com/in/thiagoafonso-dev" target="_blank" className="link">
                <button className="degrade">
                    <span>Linkedin</span>
                    <i class="bi bi-linkedin"></i>
                </button>
            </a>
        </section>
        <footer>
            <a href="https://www.instagram.com/euthiagoafonso/" className="btn-footer degrade" target="_blank"><i class="bi bi-instagram"></i></a>
            <a href="https://github.com/ThiagoDev25" className="btn-footer degrade" target="_blank"><i className="bi bi-github"></i></a>
        </footer>
    </div>
    </HelmetProvider>
    );
    }

export default LinkPage;
