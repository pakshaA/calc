import style from './header.module.css'

import Link from 'next/link'

export const Header = () => {
    return (
        <div className={style['header-container']}>
            <Link href='/' className={style['header-link']}>Calculator</Link>
            <Link href='/converter' className={style['header-link']}>Converter</Link>
        </div>
    )
}