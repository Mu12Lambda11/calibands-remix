import classNames from 'classnames';
import styles from './site-footer.module.scss';
import Icons8Email50Png from '../../assets/img/Social/icons8-email-50.png';
import Icons8Linkedin50Png from '../../assets/img/Social/icons8-linkedin-50.png';
import { NavLink } from 'react-router-dom';

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
                <div>CaliBands © 2025</div>
                <div>
                    <NavLink to="/contact">Interested in freelance work?</NavLink>
                </div>
            </div>
            <div className={styles.social}>
                <a
                    href="mailto:jacobo.calixto24@gmail.com?subject=*SUBJECT* - *YOUR NAME HERE*-CaliBands"
                    className={styles.a1}
                >
                    <img src={Icons8Email50Png} className={styles.img1} />
                </a>
                <a href="https://www.linkedin.com/in/jacobo-herrera-453895267/">
                    <img src={Icons8Linkedin50Png} className={styles.img2} />
                </a>
            </div>
        </div>
    );
};
