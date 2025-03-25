import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
import styles0 from './route.module.scss';
import USCRallyWebsiteCalendar1000X6672966088490Jpeg from '../../../src/assets/img/bands/USC-Rally-Website-Calendar-1000x667-2966088490.jpeg';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>CaliBands</div>
            <h2 className={styles0.header1}>Vision Statement</h2>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    A future where every young musician in the Southern California experiences the
                    power of marching arts, empowered by access to professional resources,
                    innovative education, and strong community support in their high school marching
                    bands.
                </div>
            </div>
            <button
                className={classNames(commonStyles.primaryButton, styles.button)}
                onClick={undefined}
            >
                Member Portal
            </button>
            <img
                src={USCRallyWebsiteCalendar1000X6672966088490Jpeg}
                alt=""
                className={styles.image}
            />
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Website Starter';
    const description = 'Welcome to the Website Starter';
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
