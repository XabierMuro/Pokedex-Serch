import styles from './index.module.css'

function App() {
  return (
    <main className={styles.pokemon_card}>
      <header className={styles.card_header}>
        <h3>Bulbasur</h3>
        <h3>#001</h3>
      </header>
      

      <section className={styles.pokemon_stats_container}>
      <img
        className={styles.pokemon_img}
        src="../public/pokemon3.png"
        alt="pokemon image"
      />
        {/* TODO nose si esto son articles */}
        <article className={styles.pokemon_types}>
          <div className={styles.pokemon_type_grass}>Grass</div>
          <div className={styles.pokemon_type_poison}>Poison</div>
        </article>
        <article className={styles.pokemon_measures}>
          <div className={styles.pokemon_weight}>6.9 kg</div>
          <div className={styles.pokemon_length}>0.7 m</div>
        </article>
        <article>
          <ul>
            <li>HP</li>
            <li>ATK</li>
            <li>DEF</li>
            <li>SAT</li>
            <li>SDF</li>
            <li>SPD</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
