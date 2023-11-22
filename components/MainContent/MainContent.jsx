import styles from './MainContent.module.css'



const Main = () => {
    return <main className={styles.main}>
        <div className={styles.counter}>
            140
        </div>
        <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.button_1}`}>Увеличть</button>
            <button className={`${styles.button} ${styles.button_2}`}>Уменьшить</button>
            <button className={`${styles.button} ${styles.button_3}`}>Сбросить</button>
        </div>
    </main>
}
export default Main