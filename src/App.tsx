import styles from './index.module.css'

function App() {
  return (
    <main className={styles.pokemon_card}>
      <header className={styles.card_header}>
        <h3>Bulbasur</h3>
        <h3>#001</h3>
      </header>
      <body className={styles.pokemon_stats_container}>
        <article className="pokemon_types">
          <div className="pokemon_type_grass"></div>
          <div className="pokemon_type_poison"></div>
        </article>
      </body>
    </main>
  )
}

export default App
