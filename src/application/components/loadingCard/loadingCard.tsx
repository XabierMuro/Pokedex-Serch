import styles from './loadingCard.module.css'
import bigPokeballIcon from '../../../images/bigPokeballIcon.svg'

export function LoadingCard() {
  return (
    <main className={styles.pokemon_card}>
      <img
        src={bigPokeballIcon}
        alt="Pokeball Icon"
        className={styles.card_image}
      />
    </main>
  )
}
