import { Card } from "./card/Card";

interface FlashcardsProps{
    cards: {topic: string, description: string}[]
}

export function Flashcards({cards}:FlashcardsProps){
    return (
        <div>
            {cards.map((card, index) => (
            <Card
            key={index}
            topic={card.topic}
            description= {card.description}
            />
            ))}
        </div>
    )
}

