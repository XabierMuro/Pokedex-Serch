import styles from './searchBar.module.css'
import SearchIcon from '../../images/searchIcon.svg'

export function SearchBar() {
  return (
    <>
      <div className={styles.search_container}>
        <img
          src={SearchIcon}
          alt="Search Icon"
          className={styles.search_icon}
        />
        <input
          className={styles.search_input}
          placeholder="Search a Pokemon..."
          type="text"
        />
      </div>
    </>
  )
}
