import styles from './HeaderContent.module.css';

export default function HeaderContent(props) {

    return (
        <div className={styles.ContainerHeaderTitle}>
            <div className={styles.HeaderTitle}>
                <h1>{props.caseStudy.heading}</h1>
                <p>{props.caseStudy.subHeading}</p>
            </div>
            <div>

            </div>
        </div>
    );
}


