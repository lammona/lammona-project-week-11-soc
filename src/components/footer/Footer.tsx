interface FooterProps {
    footerTitle: string;
}
export function Footer({footerTitle}: FooterProps) {
    return (
        <p>{footerTitle}</p>
    )
}