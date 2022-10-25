import styles from './Botao.module.scss'

export default function Botao({texto}) {
    return(
        <button className={styles.botao}>{texto}</button>
    )
}