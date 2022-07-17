import React, { ReactNode } from 'react'
import styles from '../../styles/Dashboard.module.css'

type ButtonProps = {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => (
  <button className={styles.button}>
    {children}
    Novo
  </button>
)

export default Button
