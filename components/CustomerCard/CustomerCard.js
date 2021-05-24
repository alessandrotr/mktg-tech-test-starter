import Image from 'next/image';
import styles from './CustomerCard.module.css';

export default function CustomerCard(props) {

    return (
        <div className={styles.CardContainer}>
            <div className={styles.Card}>
                {/* <Image
                src={props.caseStudy.customer.logo.url}
                width="100"
                height="100" /> */}
                <img src={props.caseStudy.customer.logo.url} />
                <p><strong>Industry:</strong> Mobile telecommunication</p>
                <p><strong>Location:</strong>  Bellevue, Washington, USA</p>
                <p><strong>Employees:</strong> 52,000</p>
                <p><strong>Revenue:</strong> $78B (2021 Analyst Projection)</p>
            </div>
        </div>
    );
}