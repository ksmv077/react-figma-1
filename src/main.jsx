import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/header/Header';
import Main from '../components/MainContent/MainContent';
import Footer from '../components/footer/Footer';
import styles from './main.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
    </div>
);
