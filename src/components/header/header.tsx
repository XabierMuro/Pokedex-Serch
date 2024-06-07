import styles from './header.module.css'
import pokeballIcon from '../../images/pokeballIcon.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img
          src={pokeballIcon}
          alt="Pokeball Icon"
          className={styles.header_image}
        />

        <h1 className={styles.header_title}>Pokédex</h1>
      </div>
    </header>
  )
}
