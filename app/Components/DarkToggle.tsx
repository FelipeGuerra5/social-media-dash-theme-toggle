'use client'

import Styles from '@/app/page.module.css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'


export default function DarkToggle(): JSX.Element {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [moved, setMoved] = useState(theme === 'dark' ? true : false)

    useEffect(() => { setMounted(true), [] })

    if (!mounted) null

    return (
        <div className={Styles.dark_theme_toggle}>
            <div
                className={Styles.dark_theme_toggle_btn}
                onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
            >
            </div>
        </div>
    )
}
