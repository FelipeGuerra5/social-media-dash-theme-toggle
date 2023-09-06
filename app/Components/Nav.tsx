import Styles from '@/app/page.module.css'
import DarkToggle from './DarkToggle'

export default function Nav(): JSX.Element {
  return (
    <nav className={Styles.nav}>
      <div>
        <h1>
          Social Media Dashboard
        </h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="dark-mode-container">
        <DarkToggle />
      </div>
    </nav>
  )
}
