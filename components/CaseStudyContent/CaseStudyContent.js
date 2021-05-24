import styles from './CaseStudyContent.module.css';

export default function CaseStudyContent(props) {

    return (
        <div
            className={styles.Content}
            dangerouslySetInnerHTML={{ __html: props.caseStudy.content }}
        />
    );
}


