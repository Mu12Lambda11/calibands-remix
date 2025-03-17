import classNames from 'classnames';
import styles from './site-footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>Contact Us</div>
                <div className={styles.small}>
                    Mail: jacobo.calixto24@gmail.com
                    <br />
                    LinkedIn: https://www.linkedin.com/in/jacobo-herrera-453895267/
                </div>
            </div>
            <div className={styles.social}></div>
        </div>
    );
};
