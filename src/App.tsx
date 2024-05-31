import styles from './index.module.css'

function App() {
  return (
    <main className={styles.pokemon_card}>
      <header className={styles.card_header}>
        <h3>Bulbasur</h3>
        <h3>#001</h3>
      </header>
      <body className={styles.pokemon_stats_container}>
        <article className={styles.pokemon_types}>
          <div className={styles.pokemon_type_grass}>Grass</div>
          <div className={styles.pokemon_type_poison}>Poison</div>
        </article>
      </body>
    </main>
  )
}

export default App
