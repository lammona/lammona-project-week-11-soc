
import styles from './Card.module.css'
interface CardProps {
    topic: string;
    description: string
    answer: string;
}
export function Card({topic, description, answer}: CardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.topic}>{topic}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.answer}>{answer}</p>
        </div>
    )
}