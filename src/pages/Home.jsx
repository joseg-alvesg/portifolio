import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { data } from '../data/infos'
import styles from './styles/home.module.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import ReactTypingEffect from 'react-typing-effect'
import { BsTelegram } from 'react-icons/bs'

export default class Home extends Component {
  render() {
    return (
      <div className={ styles.homeContainer }>
        <Header />
        <div className={ styles.home }>
          <div className={ styles.iconContainer }>
              <a href={ data.contats.linkedin } target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
              <a href={ data.contats.github } target="_blank" rel="noreferrer"><AiFillGithub /></a>
              <a href={`mailto:${data.contats.gmail}`} target="_blank" rel="noreferrer"><AiOutlineMail /></a>
              <a href={ data.contats.whatsapp } target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></a>
              <a href={ data.contats.telegram } target="_blank" rel="noreferrer"><BsTelegram /></a>
          </div>
          <div className={ styles.infos }>
            <div className={ styles.texto }>
              <ReactTypingEffect
              text={ data.presentation.welcome }
              eraseDelay={50000000}
              speed={90}
              />
            </div>
            <div className={ styles.imagem }>
              <img src={ data.image } alt="eu" className={ styles.img } />
              <img src={ data.image } alt="eu" className={ styles.img } />
              <img src={ data.image } alt="eu" className={ styles.img } />
              <img src={ data.image } alt="eu" className={ styles.img } />
            </div>
            <div>
              <ReactTypingEffect 
              text={ data.presentation.resume } 
              eraseDelay={50000000}
              speed={80}
              />
            <div>

            </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
