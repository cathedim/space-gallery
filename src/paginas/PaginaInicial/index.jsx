import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/> 
                    <div className={styles.principal__imagem}>
                        <h1>The most thorough space gallery you'll find!</h1>
                        <img src={banner} alt="Earth seen from space" />
                    </div>
                </section>
            </main>
        </>
    )
}