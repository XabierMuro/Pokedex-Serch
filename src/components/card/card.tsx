import styles from './card.module.css'

function Card() {
  return (
    <main className={styles.pokemon_card}>
      <header className={styles.card_header}>
        <h3 className={styles.card_name}>Bulbasaur</h3>
        <h3 className={styles.card_number}>#001</h3>
      </header>
      <section className={styles.pokemon_stats_container}>
        <img
          className={styles.pokemon_img}
          src="../public/bulbasaur.png"
          alt="pokemon image"
        />
        <article className={styles.pokemon_types}>
          <div className={styles.pokemon_type_grass}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2053_1082)">
                <path
                  d="M31.1749 8.24061C30.328 7.49686 26.9436 8.31249 25.9811 8.42811C22.7906 8.77733 19.6473 9.47095 16.6061 10.4969C13.4655 11.6062 10.903 13.2062 9.41864 16.3094C8.51473 18.2471 8.16447 20.3972 8.40658 22.5216C8.6487 24.6461 9.47377 26.6622 10.7905 28.3469C11.4749 27.6187 12.4561 26.8844 12.9968 26.0469C13.7186 24.9312 13.3249 22.7031 13.378 21.3031C13.3936 20.8906 13.5468 15.1812 13.8249 15.1625C14.1624 15.1406 15.0343 20.7437 15.3468 22.8312C15.3585 22.8977 15.3879 22.9598 15.4319 23.011C15.476 23.0621 15.533 23.1004 15.597 23.1219C15.661 23.1433 15.7296 23.1471 15.7955 23.1328C15.8615 23.1185 15.9224 23.0866 15.9718 23.0406C16.7155 22.3052 17.4624 21.576 18.2124 20.8531C18.7249 20.3562 18.9811 20.1625 19.1186 19.5156C19.2561 18.8687 19.153 17.9875 19.1968 17.3031C19.2218 16.8969 19.5093 11.7531 19.878 11.7281C20.2468 11.7031 21.0186 15.7375 21.3061 17.2469C21.32 17.2975 21.3464 17.3438 21.3829 17.3816C21.4193 17.4193 21.4648 17.4473 21.5149 17.4629C21.565 17.4784 21.6183 17.4811 21.6697 17.4707C21.7212 17.4602 21.7692 17.437 21.8093 17.4031C23.328 15.9312 28.0593 11.3312 28.2811 11.5375C28.503 11.7437 24.5749 17.025 23.3155 18.725C23.2872 18.7692 23.2705 18.8199 23.267 18.8724C23.2635 18.9248 23.2732 18.9772 23.2953 19.0249C23.3174 19.0726 23.3512 19.1139 23.3935 19.145C23.4358 19.1762 23.4853 19.1962 23.5374 19.2031C25.0718 19.2875 29.1624 19.5531 29.1968 19.8906C29.2311 20.2281 24.128 21.2281 23.7593 21.3C23.1343 21.4281 22.4374 21.4719 21.8124 21.6344C21.0124 21.8437 20.8749 22.0406 20.3718 22.7406C19.7468 23.5739 19.1218 24.4073 18.4968 25.2406C18.4547 25.2962 18.4288 25.3623 18.422 25.4317C18.4151 25.5011 18.4276 25.571 18.458 25.6337C18.4884 25.6964 18.5355 25.7495 18.5942 25.7872C18.6529 25.8248 18.7208 25.8454 18.7905 25.8469C20.903 25.8812 26.5686 26.0094 26.603 26.3469C26.6186 26.6281 20.978 27.5281 20.5718 27.5969C19.2811 27.8187 17.0999 27.7312 16.0655 28.4125C15.2686 28.9375 14.5343 30.3437 13.928 31.0875C15.7106 32.1394 17.7426 32.6943 19.8124 32.6943C21.8822 32.6943 23.9142 32.1394 25.6968 31.0875C28.6968 29.2969 30.0718 26.575 30.803 23.275C31.4612 20.0757 31.7547 16.8122 31.678 13.5469C31.678 12.3594 31.6343 11.1687 31.5155 9.98749C31.4686 9.59061 31.5093 8.53436 31.1749 8.24061Z"
                  fill="#ffff"
                />
              </g>
              <defs>
                <clipPath id="clip0_2053_1082">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Grass
          </div>

          <div className={styles.pokemon_type_poison}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2053_1086)">
                <path
                  d="M32.5 18.4375C32.5 12.6844 26.9031 8.02185 20 8.02185C13.0969 8.02185 7.5 12.6844 7.5 18.4375C7.5 21.5625 9.16562 24.375 11.7969 26.2937C11.4339 26.9497 11.2456 27.6878 11.25 28.4375C11.25 30.5094 12.6031 32.1875 14.2719 32.1875C15.5719 32.1875 16.6781 31.1656 17.1063 29.7375C17.4781 31.1531 18.6313 32.1875 20 32.1875C21.3687 32.1875 22.5219 31.1531 22.8938 29.7375C23.3219 31.1656 24.4281 32.1875 25.7281 32.1875C27.3969 32.1875 28.75 30.5094 28.75 28.4375C28.7544 27.6878 28.5661 26.9497 28.2031 26.2937C30.8344 24.375 32.5 21.5625 32.5 18.4375ZM20 24.7906C15.425 24.7906 11.5625 21.875 11.5625 18.4375C11.5625 15 15.425 12.0844 20 12.0844C24.575 12.0844 28.4375 15 28.4375 18.4375C28.4375 21.875 24.575 24.7906 20 24.7906Z"
                  fill="#ffff"
                />
              </g>
              <defs>
                <clipPath id="clip0_2053_1086">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Poison
          </div>
        </article>
        <article className={styles.pokemon_measures}>
          <div className={styles.pokemon_weight}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2053_1244)">
                <path
                  d="M5 11.6667C5 9.89856 5.70238 8.20286 6.95262 6.95262C8.20286 5.70238 9.89856 5 11.6667 5H28.3333C30.1014 5 31.7971 5.70238 33.0474 6.95262C34.2976 8.20286 35 9.89856 35 11.6667V28.3333C35 30.1014 34.2976 31.7971 33.0474 33.0474C31.7971 34.2976 30.1014 35 28.3333 35H11.6667C9.89856 35 8.20286 34.2976 6.95262 33.0474C5.70238 31.7971 5 30.1014 5 28.3333V11.6667Z"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0001 11.6667C23.2601 11.6667 26.2068 13.0033 28.3334 15.1583L23.4068 19.9983C22.4827 19.1425 21.2696 18.6669 20.0101 18.6667C18.7508 18.6664 17.5378 19.1414 16.6134 19.9967L11.6868 15.1583C12.7727 14.0499 14.0694 13.1699 15.5005 12.5703C16.9317 11.9706 18.4684 11.6634 20.0201 11.6667H20.0001Z"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2053_1244">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            6.9 kg
          </div>
          <div className={styles.pokemon_length}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2053_1230)">
                <path
                  d="M33.125 13.3334C34.16 13.3334 35 14.1867 35 15.2384V24.7617C35 25.8134 34.16 26.6667 33.125 26.6667H6.66667C6.22464 26.6667 5.80072 26.4911 5.48816 26.1786C5.17559 25.866 5 25.4421 5 25V15.2384C5 14.1867 5.84 13.3334 6.875 13.3334H33.125Z"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 13.3334V16.6667"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13.3334V18.3334"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 13.3334V18.3334"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30 13.3334V18.3334"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 13.3334V16.6667"
                  stroke="#ada9ad"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2053_1230">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            0.7 m
          </div>
        </article>
        <article>
          <ul className={styles.pokemon_stats_list}>
            <li className={styles.pokemon_stats}>
              HP<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.6} />
            </li>
            <li className={styles.pokemon_stats}>
              ATK<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
            <li className={styles.pokemon_stats}>
              DEF<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.3} />
            </li>
            <li className={styles.pokemon_stats}>
              SAT<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.9} />
            </li>
            <li className={styles.pokemon_stats}>
              SDF<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.5} />
            </li>
            <li className={styles.pokemon_stats}>
              SPD<span className={styles.pokemon_stat_number}>045</span>
              <progress className={styles.pokemon_progress_bar} value={0.5} />
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default Card
