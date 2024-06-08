import styles from './card.module.css'
import weightIcon from '../../images/weightIcon.svg'
import lengthIcon from '../../images/lengthIcon.svg'
import poisonIcon from '../../images/poisonIcon.svg'
import grassIcon from '../../images/grassIcon.svg'
type PokemonData = {
  name: string
  id: number
  weight: number
  height: number
  sprites: string[]
  stats: number[]
  types: string[]
}
export function Card(props: PokemonData) {
  const { name, id, weight, height, sprites, stats, types } = props
  return (
    <main className={styles.pokemon_card}>
      <header className={styles.card_header}>
        <h3 className={styles.card_name}>Bulbasaur</h3>
        <h3 className={styles.card_number}>#001</h3>
      </header>
      <section className={styles.pokemon_stats_container}>
        <img
          className={styles.pokemon_img}
          src="../public/bulbasaur.png"
          alt="pokemon image"
        />
        <article className={styles.pokemon_types}>
          <div className={styles.pokemon_type_grass}>
            <img src={grassIcon} alt="Grass Icon" />
            Grass
          </div>

          <div className={styles.pokemon_type_poison}>
            <img src={poisonIcon} alt="Poison Icon" />
            Poison
          </div>
        </article>
        <article className={styles.pokemon_measures}>
          <div className={styles.pokemon_weight}>
            <img src={weightIcon} alt="Weight Icon" />
            6.9 kg
          </div>
          <div className={styles.pokemon_length}>
            <img src={lengthIcon} alt="Length Icon" />
            0.7 m
          </div>
        </article>
        <article>
          <ul className={styles.pokemon_stats_list}>
            <li className={styles.pokemon_stats}>
              HP<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
            <li className={styles.pokemon_stats}>
              ATK<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
            <li className={styles.pokemon_stats}>
              DEF<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
            <li className={styles.pokemon_stats}>
              SAT<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
            <li className={styles.pokemon_stats}>
              SDF<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
            <li className={styles.pokemon_stats}>
              SPD<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}
