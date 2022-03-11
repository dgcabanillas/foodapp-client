import React from 'react';
import styles from './style.module.scss';

const Background = ({ children, image }) => {
  console.log(image);

  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: image ? `url(${image})` : 'none'
      }}
    > { children } </div>
  )
}

export default Background;