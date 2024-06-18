import styles from './footer.module.css'

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footer_content}>
          ©2024 Pokémon. ©1995 - 2024 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.
        </p>
      </footer>
    </>
  )
}
