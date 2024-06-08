import styles from './card.module.css'
import weightIcon from '../../images/weightIcon.svg'
import lengthIcon from '../../images/lengthIcon.svg'
import poisonIcon from '../../images/poisonIcon.svg'
import grassIcon from '../../images/grassIcon.svg'
import fireIcon from '../../images/fireIcon.svg'
import bugIcon from '../../images/bugIcon.svg'
import electricIcon from '../../images/electricIcon.svg'
import groundIcon from '../../images/groundIcon.svg'
import fightingIcon from '../../images/fightingIcon.svg'
import waterIcon from '../../images/waterIcon.svg'
import flyingIcon from '../../images/flyingIcon.svg'
import psychicIcon from '../../images/psychicIcon.svg'
import fairyIcon from '../../images/fairyIcon.svg'
import dragonIcon from '../../images/dragonIcon.svg'
import ghostIcon from '../../images/ghostIcon.svg'
import iceIcon from '../../images/iceIcon.svg'
import normalIcon from '../../images/normalIcon.svg'
import rockIcon from '../../images/rockIcon.svg'
import steelIcon from '../../images/steelIcon.svg'
import darkIcon from '../../images/darkIcon.svg'
type PokemonType =
  | 'grass'
  | 'bug'
  | 'electric'
  | 'ground'
  | 'fighting'
  | 'fire'
  | 'water'
  | 'poison'
  | 'flying'
  | 'psychic'
  | 'fairy'
  | 'dragon'
  | 'ghost'
  | 'ice'
  | 'normal'
  | 'rock'
  | 'steel'
  | 'dark'
type PokemonData = {
  name: string
  id: number
  weight: number
  height: number
  sprites: string
  stats: number[]
  types: string[]
}
const typeIcons: { [key in PokemonType]: string } = {
  grass: grassIcon,
  bug: bugIcon,
  electric: electricIcon,
  ground: groundIcon,
  fighting: fightingIcon,
  fire: fireIcon,
  water: waterIcon,
  poison: poisonIcon,
  flying: flyingIcon,
  psychic: psychicIcon,
  fairy: fairyIcon,
  dragon: dragonIcon,
  ghost: ghostIcon,
  ice: iceIcon,
  normal: normalIcon,
  rock: rockIcon,
  steel: steelIcon,
  dark: darkIcon,
}
export function Card(props: PokemonData) {
  const { name, id, weight, height, sprites, stats, types } = props
  const extraClassName = types[0]
  return (
    <main className={`${styles.pokemon_card} ${styles[extraClassName]}`}>
      <header className={styles.card_header}>
        <h3 className={styles.card_name}>{name}</h3>
        <h3 className={styles.card_number}>#{id}</h3>
      </header>
      <section className={styles.pokemon_stats_container}>
        <img
          className={styles.pokemon_img}
          src={sprites}
          alt={`${name} image`}
        />
        <article className={styles.pokemon_types}>
          {types.map(type => (
            <div className={`${styles.pokemon_type} ${styles[type]}`}>
              <img src={typeIcons[type]} alt={`${type} icon`} />
              {type}
            </div>
          ))}
        </article>
        <article className={styles.pokemon_measures}>
          <div className={styles.pokemon_weight}>
            <img src={weightIcon} alt="Weight Icon" />
            {weight} kg
          </div>
          <div className={styles.pokemon_length}>
            <img src={lengthIcon} alt="Length Icon" />
            {height} m
          </div>
        </article>
        <article>
          <ul className={styles.pokemon_stats_list}>
            <li className={styles.pokemon_stats}>
              HP<span className={styles.pokemon_stat_number}>{stats[0]}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats[0] * 0.01}
              />
            </li>
            <li className={styles.pokemon_stats}>
              ATK<span className={styles.pokemon_stat_number}>{stats[1]}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats[1] * 0.01}
              />
            </li>
            <li className={styles.pokemon_stats}>
              DEF<span className={styles.pokemon_stat_number}>{stats[2]}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats[2] * 0.01}
              />
            </li>
            <li className={styles.pokemon_stats}>
              SAT<span className={styles.pokemon_stat_number}>{stats[3]}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats[3] * 0.01}
              />
            </li>
            <li className={styles.pokemon_stats}>
              SDF<span className={styles.pokemon_stat_number}>{stats[4]}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats[4] * 0.01}
              />
            </li>
            <li className={styles.pokemon_stats}>
              SPD<span className={styles.pokemon_stat_number}>{stats[5]}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats[5] * 0.01}
              />
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}
