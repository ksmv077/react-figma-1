import image from '../../fhoto/Ellipse 1 (1).svg'
import styles from './Header.module.css'


const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logo_image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.logo_text}>outer</div>
        </div>
    )
}

export default Logo




