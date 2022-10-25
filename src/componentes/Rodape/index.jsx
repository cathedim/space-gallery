import github from './github.png';
import linkedin from './linkedin.png';
import styles from './Rodape.module.scss';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <ul>
                <li>
                    <a href="https://github.com/cathedim"><img className={styles.rodape__imagem} src={github} alt="Github"/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/catherine-costa-3617bb159/"><img className={styles.rodape__imagem} src={linkedin} alt="LinkedIn"/></a>
                </li>
            </ul>
        </footer>
    )
}