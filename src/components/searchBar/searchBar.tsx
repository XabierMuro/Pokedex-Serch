import styles from './searchBar.module.css'
import SearchIcon from '../../images/searchIcon.svg'
import { useState } from 'react'

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <>
      <div className={styles.search_container}>
        <img
          src={SearchIcon}
          alt="Search Icon"
          className={isFocused ? styles.search_icon_active : styles.search_icon}
        />
        <input
          className={
            isFocused ? styles.search_input_active : styles.search_input
          }
          placeholder="Search a Pokemon..."
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </>
  )
}
