import styles from './searchBar.module.css'

function SearchBar() {
  return (
    <>
      <div className={styles.search_container}>
        <svg className={styles.search_icon}
          width="24"
          height="24"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2053_1248)">
            <path
              d="M5 16.6667C5 18.1988 5.30177 19.7158 5.88807 21.1313C6.47438 22.5468 7.33374 23.8329 8.41709 24.9162C9.50044 25.9996 10.7866 26.859 12.202 27.4453C13.6175 28.0316 15.1346 28.3333 16.6667 28.3333C18.1988 28.3333 19.7158 28.0316 21.1313 27.4453C22.5468 26.859 23.8329 25.9996 24.9162 24.9162C25.9996 23.8329 26.859 22.5468 27.4453 21.1313C28.0316 19.7158 28.3333 18.1988 28.3333 16.6667C28.3333 15.1346 28.0316 13.6175 27.4453 12.202C26.859 10.7866 25.9996 9.50044 24.9162 8.41709C23.8329 7.33374 22.5468 6.47438 21.1313 5.88807C19.7158 5.30177 18.1988 5 16.6667 5C15.1346 5 13.6175 5.30177 12.202 5.88807C10.7866 6.47438 9.50044 7.33374 8.41709 8.41709C7.33374 9.50044 6.47438 10.7866 5.88807 12.202C5.30177 13.6175 5 15.1346 5 16.6667Z"
              stroke="#D6D4D6"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 35L25 25"
              stroke="#D6D4D6"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2053_1248">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
            
          className={styles.search_input}
          placeholder="Search a Pokemon..."
          type="text"
        />
      </div>
    </>
  )
}
export default SearchBar