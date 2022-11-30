import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment } : CommentProps){
  const [likeCount, setlikeCount] = useState(20)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setlikeCount((state) => {
      return state + 1
    });
  }
  
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lfelix885.png" alt="" />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Leonardo</strong>
            <time 
              title='05 de Novembro às 10:10' 
              dateTime='2022-11-05 10:10:02'
            >
              Cerca de 1h atrás
            </time>
          </div>

          <button 
            onClick={handleDeleteComment}
            title='Deletar comentário'
          >
            <Trash size={24}/>
          </button>
        </header>

        <p>{ content }</p>
      </div>

      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp />

          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>
    </div>


  </div>
  )
}