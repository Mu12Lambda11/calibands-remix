import styles from './profiles.module.scss';
import cx from 'classnames';
import SamPerezPng from '../../assets/img/profiles/sam perez.png';
import DrJacobVogelPng from '../../assets/img/profiles/dr. jacob vogel.png';
import JacoboHerreraJpg from '../../assets/img/profiles/jacobo herrera.jpg';

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
            <h1 className={styles.header2}>Profiles</h1>
            <div className={styles.div3}>
                <div className={styles.div4}>
                    <img
                        src={JacoboHerreraJpg}
                        alt="Sam Perez.png"
                        className={styles['profile-pic']}
                    />
                </div>
                <div className={styles.div2}>
                    <h2 className={styles.header1}>Jacobo Herrera</h2>
                    <h3 className={styles.header3}>Board Member</h3>
                    <p className={styles.p4}>
                        Jacobo Herrera graduated from the University of Southern California (USC)
                        with a bachelor’s degree in Music Industry. He has interned for the
                        International Association of Venue Managers’ certification program as an
                        operations assistant and at the Honda Center in Anaheim, CA as an Arena
                        Management Intern, assisting the marketing, programming, and special events
                        departments.  Jacobo will be continuing his education by pursuing a master’s
                        in Arts Leadership from the Thornton School of Music and will be graduating
                        May of 2025.
                    </p>
                </div>
            </div>
            <div className={styles.div3}>
                <div className={styles.div4}>
                    <img src={SamPerezPng} alt="Sam Perez.png" className={styles['profile-pic']} />
                </div>
                <div className={styles.div2}>
                    <h2 className={styles.header1}>Sam Perez III</h2>
                    <h3 className={styles.header3}>Board Member</h3>
                    <p className={styles.p2}>
                        Samuel Pérez III is in his second year as a graduate student at USC and is
                        serving as the drum major in his fourth year with the Spirit of Troy. After
                        earning a Bachelor’s of Science in Mechanical Engineering from CSULB, he is
                        currently pursuing a Masters in Music Teaching and Learning from the
                        Thornton School of Music in hopes to further his skills as a music educator.
                        Sam was previously the Assistant Director of Bands at Long Beach Polytechnic
                        High School teaching the Poly Marching Unit and the Concert Band, as well as
                        overseeing the program’s Winter Color Guard. His marching program was a 2x
                        CSBC Finalist and his concert ensembles have earned Superior ratings at
                        SCSBOA Band Festivals. Sam is is also currently a brass instructor for
                        Pacific Crest Drum and Bugle Corps.
                    </p>
                </div>
            </div>
            <div className={styles.div3}>
                <div className={styles.div4}>
                    <img
                        src={DrJacobVogelPng}
                        alt="Dr. Jacob Vogel.png"
                        className={styles['profile-pic']}
                    />
                </div>
                <div className={styles.div2}>
                    <h2 className={styles.header1}>Dr. Jacob Vogel</h2>
                    <h3 className={styles.header3}>Board Member</h3>
                    <p className={styles.p3}>
                        Dr. Jacob Vogel was named as Director of the USC Trojan Marching Band at the
                        start of 2021, the first to be new to the position in over 50 years. This
                        appointment followed a 12-year tenure as a teaching assistant, assistant
                        director, associate director, and arranger with the program. Dr. Vogel also
                        serves as an Associate Professor of Practice in Winds and Percussion with
                        the Thornton School of Music, and as a member of the Music Teaching and
                        Learning Faculty. In his former position as the Trojan Marching Band’s
                        Associate Director and Arranger, Dr. Vogel divided his time between creating
                        contemporary arrangements and contributing to the members’ continuing music
                        education. Dr. Vogel’s arrangements have been electrifying the Coliseum for
                        over a decade, and his student-centered approach to music teaching and
                        learning has had a tremendous effect on the program. Dr. Vogel’s artistic
                        vision has been instrumental to the success of his collaborative efforts
                        with the Thornton School of Music’s Popular Music Program, the Kaufman
                        School of Dance, X Ambassador’s Sam Harris, Fitz and the Tantrums, composers
                        Ramin Djawadi and Alan Silvestri, as well as Angelina Jolie and Mark Hamill.
                        Most recently, the Trojan Marching Band performed alongside Gwen Stefani and
                        the Los Angeles Philharmonic, under the direction of Maestro Gustavo
                        Dudamel.
                    </p>
                </div>
            </div>
        </div>
    );
};
