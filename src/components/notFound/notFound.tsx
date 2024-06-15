import styles from './notFound.module.css'
import notFoundIcon from '../../images/notFoundIcon.svg'

export function NotFound({ notFoundMessage }: { notFoundMessage: string }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.notFound_image}
        src={notFoundIcon}
        alt={`Not found icon`}
      />
      <p className={styles.notFound_message}>
        There is no results for "{notFoundMessage}"
      </p>
    </div>
  )
}
