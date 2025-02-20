
import styles from './Card.module.css'
interface CardProps {
    topic: string;
    description: string
}
export function Card({topic, description}: CardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.topic}>{topic}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}