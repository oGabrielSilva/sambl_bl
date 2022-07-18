import React, { ReactNode } from 'react'
import styles from '../../styles/Dashboard.module.css'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
)

export default Button
