/* eslint-disable react/jsx-key */
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/juliomalta.png',
      name: 'Julio Malta',
      role: 'Software Engineer'
    },
    content: [
      { type: 'text', content: 'Fala galera 👋' },
      { type: 'text', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-12-11T12:00:00Z'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'text', text: 'Fala galeraa'},
      {type: 'text', text: 'Acabei de subir mais um projeto no portfolio'},
      {type: 'link', text: 'jane.design/doctorcare', url: 'https://jane.design/doctorcare'},
    ],
    publishedAt: new Date('2021-08-25T12:00:00Z'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
