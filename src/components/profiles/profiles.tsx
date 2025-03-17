import styles from './profiles.module.scss';
import cx from 'classnames';

export interface ProfilesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profiles = ({ className }: ProfilesProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <h1>Profiles</h1>
            <div className={styles.div3}>
                <div>
                    <img
                        src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                        alt=""
                        className={styles['profile-pic']}
                    />
                </div>
                <div className={styles.div2}>
                    <h2 className={styles.header1}>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <p>
                        This is a placeholder paragraph. It is here to provide structure while you
                        work on your content. You can replace this text with your own words once you
                        are ready. Placeholders like this are great for visualizing the layout and
                        flow of your document before finalizing the content.
                    </p>
                </div>
            </div>
            <div className={styles.div3}>
                <div>
                    <img
                        src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                        alt=""
                        className={styles['profile-pic']}
                    />
                </div>
                <div className={styles.div2}>
                    <h2 className={styles.header1}>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <p>
                        This is a placeholder paragraph. It is here to provide structure while you
                        work on your content. You can replace this text with your own words once you
                        are ready. Placeholders like this are great for visualizing the layout and
                        flow of your document before finalizing the content.
                    </p>
                </div>
            </div>
            <div className={styles.div3}>
                <div>
                    <img
                        src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                        alt=""
                        className={styles['profile-pic']}
                    />
                </div>
                <div className={styles.div2}>
                    <h2 className={styles.header1}>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <p>
                        This is a placeholder paragraph. It is here to provide structure while you
                        work on your content. You can replace this text with your own words once you
                        are ready. Placeholders like this are great for visualizing the layout and
                        flow of your document before finalizing the content.
                    </p>
                </div>
            </div>
        </div>
    );
};
