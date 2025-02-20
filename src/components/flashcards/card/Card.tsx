interface CardProps {
    topic: string;
    description: string
}
export function Card({topic, description}: CardProps) {
    return (
        <div className="card">
            <h2>{topic}</h2>
            <p>{description}</p>
        </div>
    )
}