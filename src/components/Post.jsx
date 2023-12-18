/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
   'Comentário 1',
  ])

  const [newComment, setNewComment] = useState('')

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  });

  const publishedAtDistance = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  function handleAddComment(event) {
    event.preventDefault();

    setComments([...comments, newComment])
    setNewComment('');
  }

  function handleNewComment(event) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleInvalid(event) {
    event.target.setCustomValidity('Você precisa escrever um comentário')
  }

  function handleDelete(commentDeleting) {
    const commentsWithoutDeleted = comments.filter(comment => {return comment !== commentDeleting;
    })

    setComments(commentsWithoutDeleted)
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedAtDistance}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'text') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
        }
      })}
      </div>

      <form onSubmit={handleAddComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        name="comment"
        placeholder="Deixe um comentário" 
        value={newComment}
        onChange={handleNewComment}
        onInvalid={handleInvalid}
        required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Enviar comentário</button>
        </footer>
        
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment} 
              content={comment} 
              onDelete={handleDelete} 
            />
          )
        })}
      </div>
    </article>
  )
}