import styles from './Populares.module.scss'
import popularPhotos from './fotos-populares.json'
import Botao from 'componentes/Botao';

export default function Populares() {
    return (
        <aside className={styles.populares}>
            <h2>Popular</h2>
            <ul className={styles.populares__imagens}>
                {popularPhotos.map((popularPhoto) => {
                    return (
                        <li key={popularPhoto.id}>
                            <img src={popularPhoto.path} alt={popularPhoto.alt} />
                        </li>
                    );
                })}
            </ul>
            <Botao texto="See more"/>
        </aside>
    )
}