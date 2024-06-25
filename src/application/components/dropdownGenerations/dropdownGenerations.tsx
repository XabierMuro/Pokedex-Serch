import styles from './dropdownGenerations.module.css'

type DropdownGenerationsProps = {
  onChange: (query: string) => void
}
export function DropdownGenerations({ onChange }: DropdownGenerationsProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <select
        name="selectGenerations"
        className={styles.selectGenerations}
        onChange={handleChange}
      >
        <option value="Kanto">Kanto</option>
        <option value="Johto">Johto</option>
        <option value="Hoenn">Hoenn</option>
        <option value="Sinnoh">Sinnoh</option>
        <option value="Unova">Unova</option>
        <option value="Kalos">Kalos</option>
        <option value="Alola">Alola</option>
        <option value="Galar">Galar</option>
        <option value="Paldea">Paldea</option>
      </select>
    </div>
  )
}
