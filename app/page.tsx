import styles from './page.module.css'
import Nav from './Components/Nav'
import Data from '@/lib/data.json'
import FollowersDisplay from './Components/FollowersDisplay'
import OverviewDisplay from './Components/OverviewDisplay'

export default function Home() {

  const data: Data = Data

  return (
    <main className={styles.main}>
      <Nav />
      <div>
        {
          data.tiles.displayTiles.map(item => (
            <FollowersDisplay params={item} />
          ))
        }
      </div>
      <div>
        <h1 className={styles.overview_Title}>Overview - Today</h1>
        {
          data.tiles.overviewTiles.map(item => (
            <OverviewDisplay params={item} />
          ))
        }
      </div>



    </main>
  )
}
