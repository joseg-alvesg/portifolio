import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { data } from '../data/infos';
import trybetunesPrint from '../data/images/trybetunes-foto.png';
import styles from './styles/projetos.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BsGithub } from 'react-icons/bs';

export default class Projetos extends Component {
  render() {
    const { trybeTunes: { githubLink, buildLink } } = data.projetos;
    return (
      <div  className={ styles.container }>
        <Header />
        <div className={ styles.projectContainer }>
          <section className={ styles.section }>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className={ styles.element }>
                  <a href={ githubLink }>Projeto trybeTunes <BsGithub /></a>
                  <a href={ buildLink } target="_blank" rel="noreferrer">
                    <img src={ trybetunesPrint } alt="" />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}
