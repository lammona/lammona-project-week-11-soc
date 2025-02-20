interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}