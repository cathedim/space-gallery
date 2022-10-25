import Tags from "../Tags";
import Cards from "./Cards";
import styles from './Galeria.module.scss';
import photos from './fotos.json';
import { useState } from "react";

export default function Galeria() {
    const [itens, setItens] = useState(photos);
    const tags = [...new Set(photos.map((valor) => valor.tag))];

    const filtraFotos = (tag) => {
        const novasFotos = photos.filter((photo) => {
            return photo.tag === tag;
        });

        setItens(novasFotos);
    }

    return(
        <section className={styles.galeria}>
            <h2>Browse the gallery</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>     
            <Cards itens={itens} styles={styles}/>       
        </section>
    )
}