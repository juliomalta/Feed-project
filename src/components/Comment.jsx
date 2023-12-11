import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://placekitten.com/200/200' alt='kitten' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nome do Autor</strong>
              <time title="25 de Novembro às 13h30" dateTime='2023-11-25 14:30:31'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
            
          </header>
          <p>Muito bom, parabéns</p>

        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
          </button>
          Aplaudir <span>42</span>
        </footer>
      </div>
    </div>
  )
}