import styles from './dropdownGenerations.module.css'

export function DropdownGenerations() {
  return (
    <div className={styles.container}>
      <select name="selectGenerations" className={styles.selectGenerations}>
        <option value="Kanto">Kanto</option>
        <option value="Johto">Johto</option>
        <option value="Hoenn">Hoenn</option>
        <option value="Sinnoh">Sinnoh</option>
        <option value="Unova">Unova</option>
        <option value="Kalos">Kalos</option>
        <option value="Alola">Alola</option>
        <option value="Galar">Galar</option>
        <option value="Hisui">Hisui</option>
        <option value="Paldea">Paldea</option>
      </select>
    </div>
  )
}
