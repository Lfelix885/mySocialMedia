import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';


export function Sidebar(){

    return(
        <aside className={styles.sidebar}>
					<img 
						className={styles.cover} 
						src="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd1aXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50" /> 

					<div className={styles.profile}>
						<Avatar src="https://github.com/lfelix885.png" />

						<strong>Leonardo Felix</strong>
						<span>Web Developer</span>
					</div>

					<footer>
							<a href="#">
								<PencilLine size={20}/>
								Editar seu perfil
							</a>
						</footer>
        </aside>

    )
}