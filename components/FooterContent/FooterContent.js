import styles from './FooterContent.module.css';

export default function FooterContent(props) {

    const headingsMapped = props.links.map(heading => {
        return (
            '<div class="' + styles.LinksContainer + '"><h4 class="' + styles.Heading + '">' + heading.text + '</h4>' +
            heading.items.map(link => {
                return '<a class="' + styles.Link + '" href="' + link.href + '">' + link.text + '</a>'
            }).join('') + '</div>'
        )
    });

    return (
        <div className={styles.FooterContentContainer}>
            <div className={styles.FooterContent}>
                <div className={styles.Navigation}>
                    <div><img src='./rasa_logo_square_purple.svg' alt='logo' /></div>
                    <div dangerouslySetInnerHTML={{ __html: headingsMapped.join('') }} />
                </div>
            </div>
        </div>
    );
}


