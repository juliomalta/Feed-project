import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/juliomalta.png" />
          <div className={styles.authorInfo}>
            <strong>Julio Malta</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="23 de Novembro às 12h54" dateTime="2023-11-23">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>Acabei de subir mais um projeto no portfolio</p>
        <p>👉 <a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto </a> 
          <a href=''>#nlw </a>
          <a href=''>#rocketseat</a></p>
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
