
import { Card } from "./card/Card";
import styles from './Flashcards.module.css';

interface FlashcardsProps{
    cards: {topic: string, description: string, answer: string, exampleTopic: string, example:string}[]
}

export function Flashcards({cards}:FlashcardsProps){
    return (
        <div className={styles.container}>
            {cards.map((card, index) => (
            <Card
            key={index}
            topic={card.topic}
            description= {card.description}
            answer={card.answer}
            exampleTopic={card.exampleTopic}
            example={card.example}
            />
            ))}
        </div>
    )
}