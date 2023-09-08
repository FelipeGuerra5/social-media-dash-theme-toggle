import Styles from '@/app/page.module.css'

export default function DarkToggle(): JSX.Element {
    return (
        <div className={Styles.dark_theme_toggle}>
            <div className={Styles.dark_theme_toggle_btn}></div>
        </div>
    )
}
