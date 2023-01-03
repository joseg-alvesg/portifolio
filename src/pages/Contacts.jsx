import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './styles/contacts.module.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { data } from '../data/infos';
import { BsTelegram } from 'react-icons/bs';

export default class Contacts extends Component {
  render() {
    const  { linkedin, gmail, whatsapp, github, telegram, phoneNumber } = data.contats;
    return (
      <div className={ styles.contacts }>
        <Header />
        <div className={ styles.container }>
          <section className={ styles.section }>
            <ul className={ styles.ul }>
              <li>
                <a href={ github } target="_blank" rel="noreferrer">
                  <AiFillGithub className={ styles.icon } />
                  <span>{github}</span>
                </a>
              </li>
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <AiFillLinkedin className={ styles.icon } />
                  <span>{linkedin}</span>
                </a>
              </li>
              <li>
              <a href={`mailto:${gmail}`} target="_blank" rel="noreferrer">
                <AiOutlineMail className={ styles.icon } />
                <span>{gmail}</span>
              </a>
              </li>
              <li>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp className={ styles.icon } />
                <span>{phoneNumber}</span>
              </a>
              </li>
              <li>
              <a href={telegram} target="_blank" rel="noreferrer">
                <BsTelegram className={ styles.icon } />
                <span>{phoneNumber}</span>
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
