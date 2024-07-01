import React from 'react'
import styles from "./title.module.css"

export const Title = ({value}) => {
  return (
    <>
        <h3 className={styles.titleItem}>{value}</h3>
    </>
  )
}
