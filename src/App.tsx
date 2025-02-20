// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  { Header }  from './components/header/Header'
import  { Footer }  from './components/footer/Footer'
import { Flashcards } from './components/flashcards/Flashcards'


function App() {
  //const [count, setCount] = useState(0)
const cardsData = [
  {topic: "card 1", description: "This is the first card"},
  {topic: "card 2", description: "This is the second card"},
  {topic: "card 3", description: "This is the third card"},
  {topic: "card 4", description: "This is the fourth card"},
  {topic: "card 5", description: "This is the fifth card"},
];
  return (
    <>
    <div>
      <Header title="Welcome to my Project ❤️"/>
      <Flashcards cards={cardsData}/>
      <Footer footerTitle='This is a footer of the page!'/>
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
