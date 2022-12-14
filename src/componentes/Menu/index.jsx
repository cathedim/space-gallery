import home from '../../assets/icones/home-ativo.png'
import mostLiked from '../../assets/icones/mais-curtidas-inativo.png'
import mostViewed from '../../assets/icones/mais-vistas-inativo.png'
import newImg from '../../assets/icones/novas-inativo.png'
import surpriseMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="/">Home</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostLiked} alt="" />
                    <a href="/">Most liked</a>
                </li>
                <li className={styles.menu__item}>                    
                    <img src={mostViewed} alt="" />
                    <a href="/">Most viewed</a>
                </li>
                <li className={styles.menu__item}>                    
                    <img src={newImg} alt="" />
                    <a href="/">New</a>
                </li>
                <li className={styles.menu__item}>                    
                    <img src={surpriseMe} alt="" />
                    <a href="/">Surprise me</a>
                </li>
            </ul>
        </nav>
    )
}