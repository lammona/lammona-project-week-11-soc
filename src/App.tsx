
import styles from './App.module.css'
import  { Header }  from './components/header/Header'
import  { Footer }  from './components/footer/Footer'
import { Flashcards } from './components/flashcards/Flashcards'


function App() {
 const cardsData = [
  {topic: "Use HTTPS Everywhere", description: "Why HTTPS? 🔒", answer: "HTTPS = Website Bodyguard. Always use it to keep your data safe from hackers. 💻🔐", exampleTopic: "Use HTTPS Everywhere", example: "Deploy your React app on a hosting service with SSL (like Vercel or Netlify) and enforce HTTPS by redirecting all HTTP traffic in your backend."},
  {topic: "Sanitize User Input", description: "Can I trust user input? 🤨", answer: "Nope! Sanitize it. Don't let bad guys sneak in through your forms. 🚫",exampleTopic: "Sanitize User Input", example: "Use libraries like DOMPurify or sanitize-html to clean user input before rendering it in your React components."},
  {topic: "Use CSP (Content Security Policy)", description: "What’s CSP? 🛡️", answer: "CSP = Security Guard for your website. Only let trusted sources in! 🚷", exampleTopic: "Use CSP (Content Security Policy)", example: "Set a strict CSP header in your backend or use a meta tag in index.html to block unauthorized scripts."},
  {topic: "Avoid Local Storage for Secrets", description: "Can I store secrets in local storage? 🔐", answer: "Nope! Local storage is like leaving your stuff out in the open. Use secure cookies instead. 🔒", exampleTopic: "Avoid Local Storage for Secrets", example: "Store sensitive tokens in httpOnly cookies instead of localStorage to prevent XSS attacks."},
  {topic: "Strong Authentication", description: "How do I know my user is legit? 🤖", answer: "Use OAuth or JWT for a secret handshake. Only real users get in! 🔑",exampleTopic: "Strong Authentication", example: "Implement authentication using Firebase Auth, Auth0, or NextAuth.js to securely manage user logins."},
  {topic: "Update Dependencies Regularly", description: "Why update my code? 🔄", answer: "Old dependencies are like old gadgets—unsafe! Keep them fresh and updated. 🛠️", exampleTopic: "Update Dependencies Regularly", example: "Run npm audit fix and keep your dependencies updated with npm-check -u to patch security vulnerabilities."},
  {topic: "Set Security Headers", description: "What are security headers? 🏷️", answer: "Headers = Extra Locks. Keep your site safe by setting them up! 🔒", exampleTopic: "Set Security Headers", example: "Use Helmet.js in your Express backend or configure securityHeaders.js in Next.js to enforce security headers."},
  {topic: "Guard Against CSRF", description: "What’s CSRF? 🕵️‍♂️", answer: "CSRF = Sneaky Attacks! Block them with anti-CSRF tokens. 🛑", exampleTopic: "Guard Against CSRF", example: "Use csrf package in Express or enable SameSite=Strict on cookies to prevent CSRF attacks."},
  {topic: "Obfuscate Code", description: "Why hide my code? 🕵️‍♀️", answer: "Make your code unreadable to bad guys. It's like wearing a disguise! 🦸‍♂️", exampleTopic: "Obfuscate Code", example: "Minify and obfuscate your React build using Webpack’s TerserPlugin to make it harder to reverse-engineer."},
  {topic: "Monitor Security Events", description: "Why monitor events? 📊", answer: "Stay one step ahead! Keep an eye out for problems and fix them fast. 👀🚨", exampleTopic: "Monitor Security Events", example: "Set up logging with Sentry or LogRocket to track security issues in your React app."},

];
  return (
    <>
    <div className={styles.container}>
      <Header title="Secure Your React App: Top 10 Cybersecurity Tips 🔐"/>
      <Flashcards cards={cardsData}/>
      <Footer footerTitle='Secure your knowledge, secure your future!'/>
      </div>
    </>
  )
}

export default App
