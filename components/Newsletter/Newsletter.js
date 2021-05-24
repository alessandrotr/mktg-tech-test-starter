import styles from './Newsletter.module.css';

export default function Newsletter() {

    return (
        <div className={styles.NewsletterContainer}>
            <div className={styles.NewsletterText}>
                <p>Join our Community Newsletter</p>
                <p>Stay up to date with the latest news from the Rasa community!</p>
            </div>
            <div className={styles.NewsletterForm}>
                <input placeholder="Your email address" /><button>Submit</button>
            </div>
        </div>
    );
}


