import { Dispatch, SetStateAction } from 'react'

import Styles from '@/app/page.module.css'
import DarkToggle from './DarkToggle'

type Props = {
  params: {
    darkmode: string | null,
    setDarkmode: Dispatch<SetStateAction<string | null>>
  }
}

export default function Nav({ params }: Props): JSX.Element {
  const { darkmode, setDarkmode } = params
  return (
    <nav className={Styles.nav}>
      <div>
        <h1 className={Styles.followers_display_title}>
          Social Media Dashboard
        </h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className={Styles.darkmode_container}>
        <DarkToggle params={{ darkmode, setDarkmode }} />
      </div>
    </nav>
  )
}
