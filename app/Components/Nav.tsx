import Styles from '@/app/page.module.css'
import DarkToggle from './DarkToggle'

export default function Nav(): JSX.Element {

  return (
    <nav className={Styles.nav}>
      <div>
        <h1 className={Styles.nav_title}>
          Social Media Dashboard
        </h1>
        <p className={Styles.nav_legend}>Total Followers: 23,004</p>
      </div>
      <div className={Styles.dark_mode_container}>
        Dark Mode
        <DarkToggle />
      </div>
    </nav>
  )
}
