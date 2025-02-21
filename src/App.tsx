// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import styles from './App.module.css'
import  { Header }  from './components/header/Header'
import  { Footer }  from './components/footer/Footer'
import { Flashcards } from './components/flashcards/Flashcards'


function App() {
  //const [count, setCount] = useState(0)
const cardsData = [
  {topic: "Use HTTPS Everywhere", description: "Why HTTPS? 🔒", answer: "HTTPS = Website Bodyguard. Always use it to keep your data safe from hackers. 💻🔐"},
  {topic: "Sanitize User Input", description: "Can I trust user input? 🤨", answer: "Nope! Sanitize it. Don't let bad guys sneak in through your forms. 🚫"},
  {topic: "Use CSP (Content Security Policy)", description: "What’s CSP? 🛡️", answer: "CSP = Security Guard for your website. Only let trusted sources in! 🚷"},
  {topic: "Avoid Local Storage for Secrets", description: "Can I store secrets in local storage? 🔐", answer: "Nope! Local storage is like leaving your stuff out in the open. Use secure cookies instead. 🔒"},
  {topic: "Strong Authentication", description: "How do I know my user is legit? 🤖", answer: "Use OAuth or JWT for a secret handshake. Only real users get in! 🔑"},
  {topic: "Update Dependencies Regularly", description: "Why update my code? 🔄", answer: "Old dependencies are like old gadgets—unsafe! Keep them fresh and updated. 🛠️"},
  {topic: "Set Security Headers", description: "What are security headers? 🏷️", answer: "Headers = Extra Locks. Keep your site safe by setting them up! 🔒"},
  {topic: "Guard Against CSRF", description: "What’s CSRF? 🕵️‍♂️", answer: "CSRF = Sneaky Attacks! Block them with anti-CSRF tokens. 🛑"},
  {topic: "Obfuscate Code", description: "Why hide my code? 🕵️‍♀️", answer: "Make your code unreadable to bad guys. It's like wearing a disguise! 🦸‍♂️"},
  {topic: "Monitor Security Events", description: "Why monitor events? 📊", answer: "Stay one step ahead! Keep an eye out for problems and fix them fast. 👀🚨"},

];
  return (
    <>
    <div className={styles.container}>
      <Header title="Cybersecurity Flashcards 🔐"/>
      <Flashcards cards={cardsData}/>
      <Footer footerTitle='Secure your knowledge, secure your future!'/>
      </div>
    
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
