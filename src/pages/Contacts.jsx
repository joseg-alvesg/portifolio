import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './styles/contacts.module.css'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import ReactTypingEffect from 'react-typing-effect'
import { data } from '../data/infos'

export default class Contacts extends Component {
  render() {
    const  { linkedin, gmail, whatsapp, github } = data.contats;
    return (
      <div className={ styles.contacts }>
        <Header />
        <div className={ styles.container }>a
          <section className={ styles.section }>
            <ul className={ styles.ul }>
              <li>
                <a href={ github } target="_blank" rel="noreferrer">
                  <AiFillGithub />
                  <span>{github}</span>
                </a>
              </li>
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <AiFillLinkedin />
                  <span>{linkedin}</span>
                </a>
              </li>
              <li>
              <a href={`mailto:${gmail}`} target="_blank" rel="noreferrer">
                <AiOutlineMail />
                <span>{gmail}</span>
              </a>
              </li>
              <li>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp />
                <span>{whatsapp}</span>
              </a>
              </li>
            </ul>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}
