import styles from './Navbar.module.css';

export default function Navbar(props) {

    return (
        <div className={styles.Navbar}>
            <div className={styles.Logo}>
                <img src='./rasa_horizontal_logo_white.svg' alt='logo' />
            </div>
            <div className={styles.Navigation}>
                <ul>
                    {props.links.slice(0, 6).map(link => (
                        <li key={link.text}>
                            <a>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.GetStarted}>
                {props.links.slice(6, 7).map(link => (
                    <li key={link.text}>
                        <a>{link.text}</a>
                    </li>
                ))}
            </div>
        </div>
    );
}


