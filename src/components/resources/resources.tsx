import styles from './resources.module.scss';
import cx from 'classnames';

export interface ResourcesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Resources = ({ className }: ResourcesProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <h1>Resources</h1>
            <p>
                We provide free resources for band directors. Feel free to use the links below at
                your discretion: (Links not yet provided)
            </p>
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXDSBwkJUQkBhyohjO8%3D">Link</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXDSBwkJUQkBhyohjO8%3D">Link</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXDSBwkJUQkBhyohjO8%3D">Link</a>
                </li>
            </ul>
        </div>
    );
};
