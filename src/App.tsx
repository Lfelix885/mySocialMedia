import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from'./App.module.css';

import './global.css';

//author:{avatar_url:'', name:"", role:""}
//publishedAt: Date
//content:string

const posts = [
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/lfelix885.png',
      name:'Leonardo Felix',
      role:'Desenvolvedor @Apple',
    },
    content:[
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },      
    ],
    publishedAt: new Date('2022-11-09 21:30:00')
  },
  {
    id: 2,
    author:{
      avatarUrl:'https://pps.whatsapp.net/v/t61.24694-24/308040070_3357409114529239_1948516874134590933_n.jpg?ccb=11-4&oh=01_AdQbg8H5SS4L7XJc4HfgKzSyn2tEeMW02feAFa1nYGnYLw&oe=6379642F',
      name:'Giulia Domingues',
      role:'Professora @Oen',
    },
    content:[
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },      
    ],
    publishedAt: new Date('2022-11-10  17:30:00')
  },
]


function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => 
              <Post 
                key={post.id}
                author={post.author} 
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }
        </main>
      </div>
    </>
  )
}

export default App
