import styles from './Tags.module.scss'
import photos from '../Galeria/fotos.json'

export default function Tags({tags, filtraFotos, setItens}) {
    return (
        <div className={styles.tags}>
            <p>Filter by tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return <li key={tag} onClick={()=>filtraFotos(tag)}>{tag}</li>
                })}
                <li onClick={()=>setItens(photos)}>All</li>
            </ul>
        </div>
    );
}