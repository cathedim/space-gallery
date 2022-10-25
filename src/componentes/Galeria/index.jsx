import Tags from "../Tags";
import Cards from "./Cards";
import styles from './Galeria.module.scss';
import photos from './fotos.json';

export default function Galeria() {
    return(
        <section className={styles.galeria}>
            <h2>Browse the gallery</h2>
            <Tags/>     
            <Cards itens={photos} styles={styles}/>       
        </section>
    )
}