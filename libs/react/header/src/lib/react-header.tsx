import './react-header.scss';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ReactHeaderProps {
    title: string;
}

export function ReactHeader(props: ReactHeaderProps) {
    return (
        <header className='header-wrapper'>
            <div className='logo'>
                <Link to='/dashboard'>e~Shop</Link>
            </div>
            <div className='search'>
                <input
                    type='search'
                    id='product-search'
                    placeholder='Search for your favorite products'
                />
            </div>
            <div className='profile'>
                <ul>
                    <li className='user-details'>
                        <button
                            type='button'
                            className='rounded-button'
                            onClick={(e) => e.preventDefault()}
                        >
                            N
                        </button>
                    </li>
                    <li>
                        <button
                            type='button'
                            className='rounded-button'
                            onClick={(e) => e.preventDefault()}
                        >
                            L
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default ReactHeader;
