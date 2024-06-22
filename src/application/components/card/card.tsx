import styles from './card.module.css'
import weightIcon from '../../../images/weightIcon.svg'
import lengthIcon from '../../../images/lengthIcon.svg'
import poisonIcon from '../../../images/poisonIcon.svg'
import grassIcon from '../../../images/grassIcon.svg'
import fireIcon from '../../../images/fireIcon.svg'
import bugIcon from '../../../images/bugIcon.svg'
import electricIcon from '../../../images/electricIcon.svg'
import groundIcon from '../../../images/groundIcon.svg'
import fightingIcon from '../../../images/fightingIcon.svg'
import waterIcon from '../../../images/waterIcon.svg'
import flyingIcon from '../../../images/flyingIcon.svg'
import psychicIcon from '../../../images/psychicIcon.svg'
import fairyIcon from '../../../images/fairyIcon.svg'
import dragonIcon from '../../../images/dragonIcon.svg'
import ghostIcon from '../../../images/ghostIcon.svg'
import iceIcon from '../../../images/iceIcon.svg'
import normalIcon from '../../../images/normalIcon.svg'
import rockIcon from '../../../images/rockIcon.svg'
import steelIcon from '../../../images/steelIcon.svg'
import darkIcon from '../../../images/darkIcon.svg'
import smallPokeballIcon from '../../../images/smallPokeballIcon.svg'
import { PokemonData, PokemonType } from '../../../domain/pokemon'

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

export function Card({ pokemon }: { pokemon: PokemonData }) {
  const { name, id, weight, height, sprites, stats, types } = pokemon
  const extraClassName = types[0]
  const image = sprites != null ? sprites : smallPokeballIcon
  const identifier = id < 10 ? '00'+id : id < 100 ? '0'+id : id
  return (
    <main className={`${styles.pokemon_card} ${styles[extraClassName]}`}>
      <header className={styles.card_header}>
        <h3 className={styles.card_name}>{name}</h3>
        <h3 className={styles.card_number}>#{identifier}</h3>
      </header>
      <section className={styles.pokemon_stats_container}>
        <img className={styles.pokemon_img} src={image} alt={`${name} image`} />
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
              <span className={styles.pokemon_stat_label}>HP</span>
              <span className={styles.pokemon_stat_number}>{stats.hp < 100 ? '0'+stats.hp : stats.hp}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats.hp}
                max={250}
              />
            </li>
            <li className={styles.pokemon_stats}>
              <span className={styles.pokemon_stat_label}>ATK</span>
              <span className={styles.pokemon_stat_number}>{stats.atk < 100 ? '0'+stats.atk : stats.atk}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats.atk}
                max={250}
              />
            </li>
            <li className={styles.pokemon_stats}>
              <span className={styles.pokemon_stat_label}>DEF</span>
              <span className={styles.pokemon_stat_number}>{stats.def < 100 ? '0'+stats.def : stats.def}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats.def}
                max={250}
              />
            </li>
            <li className={styles.pokemon_stats}>
              <span className={styles.pokemon_stat_label}>SAT</span>
              <span className={styles.pokemon_stat_number}>{stats.sat < 100 ? '0'+stats.sat : stats.sat}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats.sat}
                max={250}
              />
            </li>
            <li className={styles.pokemon_stats}>
              <span className={styles.pokemon_stat_label}>SDF</span>
              <span className={styles.pokemon_stat_number}>{stats.sdf < 100 ? '0'+stats.sdf : stats.sdf}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats.sdf}
                max={250}
              />
            </li>
            <li className={styles.pokemon_stats}>
              <span className={styles.pokemon_stat_label}>SPD</span>
              <span className={styles.pokemon_stat_number}>{stats.spd < 100 ? '0'+stats.spd : stats.spd}</span>
              <progress
                className={styles.pokemon_progress_bar}
                value={stats.spd}
                max={250}
              />
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}
