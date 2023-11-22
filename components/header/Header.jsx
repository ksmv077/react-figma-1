import Logo from "./logo"
import styles from './Header.module.css'
import Menu from "./menu"


const Header = () => {
     return (
          <div className={styles.header}>
               <Logo/>
               <Menu/>
          </div>
     )
}
export default Header