import styles from './Footer.module.css';

interface FooterProps {
    footerTitle: string;
}
export function Footer({footerTitle}: FooterProps) {
    return (
        <footer className={styles.footer}> 
        <p className={styles.footerTitle}>{footerTitle}</p>
        </footer>
    )
}