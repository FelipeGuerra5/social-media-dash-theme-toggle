import Styles from '@/app/page.module.css'
import { useState, useEffect } from 'react'


export default function DarkToggle(): JSX.Element {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        darkMode ? 


    }, [darkMode])


    return (
        <div className={Styles.dark_theme_toggle}>
            <div className={Styles.dark_theme_toggle_btn}>
                <input
                    type="checkbox"
                    name="darkmode"
                    id="darkmode"
                    className={Styles.darkmode_checkbox}
                    onClick={() => { setDarkMode(!darkMode) }}
                />
            </div>
        </div>
    )
}
