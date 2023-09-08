import Styles from '@/app/page.module.css'
import { Dispatch, SetStateAction } from 'react'

type Props = {
    params: {
        darkmode: string | null,
        setDarkmode: Dispatch<SetStateAction<string | null>>
    }
}

export default function DarkToggle({ params }: Props): JSX.Element {

    const { darkmode, setDarkmode } = params

    return (
        <div className={Styles.dark_theme_toggle}>
            <div className={Styles.dark_theme_toggle_btn}>
                <input type="checkbox" name="darkmode" id="darkmode" className={Styles.darkmode_checkbox} />
            </div>
        </div>
    )
}
