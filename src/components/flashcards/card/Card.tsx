import { useState} from 'react';
import styles from './Card.module.css'

interface CardProps {
    topic: string;
    description: string
    answer: string;
    exampleTopic: string;
    example: string;
}
export function Card({topic, description, answer, exampleTopic, example}: CardProps) {
    const [isFlip, setIsFlip] = useState(false);

    const handleFlip = () => {
        setIsFlip(!isFlip);
    }

    return (
        <div className={styles.card}>
            <button className={styles.flipButton} onClick={handleFlip}>
                {isFlip ? (
                    <>
                    <h2 className={styles.exampleTopic}>{exampleTopic}</h2>
                    <p className={styles.example}>{example}</p>
                    </>
                ) : (
                    <>
            <h2 className={styles.topic}>{topic}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.answer}>{answer}</p>
            </>
        )}
            </button>
        </div>
    )
}