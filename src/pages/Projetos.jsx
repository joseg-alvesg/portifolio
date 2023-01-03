import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { data } from '../data/infos';
import trybetunesPrint from '../data/images/trybetunes-foto.png';
import styles from './styles/projetos.module.css';

export default class Projetos extends Component {
  render() {
    const { trybeTunes } = data.projetos;
    return (
      <div  className={ styles.container }>
        <Header />
        <div className={ styles.projectContainer }>
          <section className={ styles.section }>
            <div className={ styles.element }>
              <img src={ trybetunesPrint } alt="" />
              <span>Projeto trybeTunes</span>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}
