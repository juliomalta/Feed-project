import React from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

console.log(React.version); // 17.0.2

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="John Doe" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." 
          />
          <Post 
            author="Milena Doe" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          />
        </main>
      </div>
    </div>
  )
}

export default App
