import styles from './Footer.module.css'
import logo from '../../fhoto/logo.svg'



const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.head}>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.menu}>
                <li><a href="/">Партнерам</a></li>
                <li><a href="/">Разработчикам</a></li>
                <li><a href="/">Вакансии</a></li>
            </div>
        </div>
        <div className={styles.info}>ООО “интукод”, 2020г.</div>
    </footer>
}
export default Footer