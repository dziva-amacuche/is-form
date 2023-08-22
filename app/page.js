"use client";
import React, { useState, useEffect } from "react";
import "./Homepage.css";

function Homepage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [signUpMode, setSignUpMode] = useState(false);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      setSignUpMode(true);
    });

    sign_in_btn.addEventListener("click", () => {
      setSignUpMode(false);
    });

    return () => {
      // Clean up the event listeners
      sign_up_btn.removeEventListener("click", () => {
        setSignUpMode(true);
      });
      sign_in_btn.removeEventListener("click", () => {
        setSignUpMode(false);
      });
    };
  }, []);

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Entre</h2>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Senha" />
            </div>

            <input type="submit" value="Entrar" class="btn solid" />
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Inscreva-se</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Nome de usuario" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Senha" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>

              <input type="date" placeholder="Data de nascimento" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>

              <input placeholder="Telefone" />
            </div>
            <input type="submit" class="btn" value="Inscreva-se" />
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Novo aqui?</h3>
            <p>
              Junte-se a nós se você está pronto para expandir seus horizontes,
              adquirir novas habilidades e trilhar o caminho do aprendizado
              contínuo
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Inscreva-se
            </button>
          </div>
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Ja é um de nós?</h3>
            <p>
              Se você já é parte da nossa comunidade, insira suas credenciais
              abaixo e mergulhe novamente no mundo do conhecimento.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
