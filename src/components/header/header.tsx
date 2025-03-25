import classNames from 'classnames';
import { Link, NavLink } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}>
                LOGO
            </Link>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={ROUTES.about.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to={ROUTES.profiles.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Profiles
                </NavLink>
                <NavLink
                    to={ROUTES.resources.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Resources
                </NavLink>
                <NavLink
                    to={ROUTES.contact.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Contact Us
                </NavLink>
            </div>
        </div>
    );
};
