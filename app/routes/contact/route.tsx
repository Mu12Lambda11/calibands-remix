import React from 'react';
import styles from './route.module.scss';
import Icons8Email50Png from '../../../src/assets/img/Social/icons8-email-50.png';
import Icons8Linkedin50Png from '../../../src/assets/img/Social/icons8-linkedin-50.png';
export default function Contact() {
    return (
        <div className={styles.div2}>
            <div className={styles.div1}>
                <h1 className={styles.header1}>Contact Us</h1>
            </div>
            <div className={styles.div3}>
                <h2 className={styles.header2}>Interested in Membership?</h2>
                <div className={styles.div4}>
                    <div className={styles.div5}>
                        <h3>Email</h3>
                        <p>
                            For emails, copy and paste the address below or click on the email icon:
                        </p>
                        <ul>
                            <li>jacobo.calixto24@gmail.com</li>
                        </ul>
                        <a
                            href="mailto:jacobo.calixto24@gmail.com?subject=*SUBJECT* - *YOUR NAME HERE*-CaliBands"
                            className={styles.a2}
                        >
                            <img src={Icons8Email50Png} className={styles.img1} />
                        </a>
                    </div>
                    <div className={styles.div6}>
                        <h3>Linkedin</h3>
                        <p>
                            For LinkedIn, copy and paste the address below or click on the LinkedIn
                            icon:
                        </p>
                        <ul>
                            <li>linkedin.com/in/jacobo-herrera-453895267/</li>
                        </ul>
                        <a
                            href="https://www.linkedin.com/in/jacobo-herrera-453895267/"
                            className={styles.a2}
                        >
                            <img src={Icons8Linkedin50Png} className={styles.img1} />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className={styles.header3}>Feel Free to Contact Us!</h2>
                </div>
            </div>
        </div>
    );
}
