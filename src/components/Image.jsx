import React, { Component } from 'react'
import { data } from '../data/infos'
import styles from './image.module.css'

export default class Image extends Component {
  render() {
    return (
      <img src={ data.image } alt="eu" className={ styles.img } />
    )
  }
}
