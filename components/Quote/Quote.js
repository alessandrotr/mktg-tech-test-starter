import CaseStudyContent from '../CaseStudyContent/CaseStudyContent';
import styles from './Quote.module.css';

export default function Quote(props) {
    return (
        <>
            <div className={styles.Quote}>
                <div dangerouslySetInnerHTML={{ __html: props.caseStudy.quote[0].text }} />
            </div>
            <div className={styles.Pointer}></div>

            <div className={styles.Cite}>
                <div>
                    <img src={props.caseStudy.quote[0].avatar.url} />
                </div>
                <div>
                    <p>{props.caseStudy.quote[0].cite}</p>
                </div>
            </div>
        </>
    );
}


