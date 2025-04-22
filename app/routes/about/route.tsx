import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './about.module.scss';
import styles0 from './route.module.scss';
import ConcordBlueCropJpg from '../../../src/assets/img/bands/concord blue crop.jpg';
import BlueDevilsCropJpg from '../../../src/assets/img/bands/blue devils crop.jpg';
import classNames from 'classnames';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function AboutPage() {
    return (
        <div className={styles.root}>
            <div className={styles0.div2}>
                <img src={BlueDevilsCropJpg} alt="" className={styles.image} />
                <div className={styles.text}>
                    <h1 className={styles.title}>What We Offer</h1>
                    <p className={styles.paragraph}>Membership comes with access to:</p>
                    <ul>
                        <li>Music Library</li>
                        <li>Drill Library</li>
                        <li>Optional Leadership Clinics</li>
                        <li>College Workshops</li>
                        <li>Administration Consultation</li>
                    </ul>
                </div>
            </div>
            <div className={styles0.div3}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Mission Statement</h1>
                    <p className={styles.paragraph}>
                        Cali Bands fosters a thriving and inclusive marching band culture by
                        providing essential music education resources, drill writing tools, and
                        administrative support.
                    </p>
                    <p className={styles.paragraph}>
                        Through collaborative workshops, a comprehensive music library, and
                        connections to industry professionals, we empower band directors,
                        instructors, and students across the Southern California to achieve
                        excellence in the performing arts and higher education.
                    </p>
                </div>
                <img src={ConcordBlueCropJpg} alt="" className={styles.image} />
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Website Starter - About Page';
    const description = 'Welcome to the Website Starter About Page';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
