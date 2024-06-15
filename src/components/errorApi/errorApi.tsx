import styles from './errorApi.module.css'
import errorIcon from '../../images/errorIcon.svg'

export function ErrorApi() {
  return (
    <div className={styles.container}>
      <img className={styles.error_image} src={errorIcon} alt={`Error icon`} />
      <p className={styles.error_message}>
        An error occurred getting Pokémons. Please, try it later
      </p>
    </div>
  )
}
