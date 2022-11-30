import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Content {
  type: 'paragraph' | 'link';
  content:string;
}

interface Author {
  name:string;
  role:string;
  avatarUrl:string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, content, publishedAt }: PostProps){
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [newCommentText, setNewCommenText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    // "dd 'de' LLLL 'às' HH:mm'h'",
    "dd 'de' LLLL 'às' HH:mm'h' ",

    {locale:ptBR}
  );  

  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt,
    {
      addSuffix:true,
      locale:ptBR
    }
  );

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([ ...comments, newCommentText ])
    setNewCommenText('');
  };

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommenText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWhithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWhithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}  />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title='05 de Novembro às 10:10' 
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateFormatted}
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content} >{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href='#'>{line.content}</a></p>
            } 
          })
        }
      </div>

      <form 
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>
        <textarea 
          name='comment'
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button disabled={isNewCommentEmpty} type='submit'>
            Publicar  
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            /> 
            )
          })
        }
      </div> 

    </article>
  )
}