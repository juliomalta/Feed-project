/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }) {
  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  });

  const publishedAtDistance = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

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
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>;
        }
      })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Enviar comentário</button>
        </footer>
        
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}


//   return (
//     <article className="post">
//       <header className="post-header">
//         <img src="profile-image.jpg" alt="Profile Image" className="profile-image" />
//         <div className="profile-info">
//           <h2 className="profile-name">John Doe</h2>
//           <p className="post-time">Posted 2 hours ago</p>
//         </div>
//       </header>
//       <div className="post-body">
//         {/* Post content goes here */}
//       </div>
//     </article>
//   )
// }
