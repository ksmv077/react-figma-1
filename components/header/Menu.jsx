import styles from './Header.module.css'

const Menu = () => {
    return (
      <div className={styles.menu}> 
        <div><a href='/'>Главная</a></div>
        <div><a href='/'>О нас</a></div>
        <div><a href='/'>Контакты</a></div>
      </div>
    )
}

export default Menu