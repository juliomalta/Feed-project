import { PencilSimpleLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/juliomalta.png" />
        <strong>Julio Malta</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} /> 
          <span>Editar seu perfil</span>
        </a>
      </footer>
    </aside>
  )
}