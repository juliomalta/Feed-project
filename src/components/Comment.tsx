import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

interface CommentProps {
  content: string;
  onDelete: (content: string) => void;

}

export function Comment( {content, onDelete }: CommentProps ) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDelete() {
    onDelete(content)

  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://placekitten.com/200/200' alt='kitten' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nome do Autor</strong>
              <time title="25 de Novembro às 13h30" dateTime='2023-11-25 14:30:31'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDelete} title='Deletar comentário'>
              <Trash size={24} />
            </button>
            
          </header>
          <p>{content}</p>

        </div>
        <footer>
          <button onClick={handleLike}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}