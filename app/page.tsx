'use client'
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
      <div className={styles.followers_tiles_container}>
        {
          data.tiles.displayTiles.map(item => (
            <FollowersDisplay params={item} />
          ))
        }
      </div>
      <div className={styles.overview_tiles_display}>
        <h1 className={styles.overview_display_title}>Overview - Today</h1>
        <div className={styles.overview_tiles_container}>

          {
            data.tiles.overviewTiles.map(item => (
              <OverviewDisplay params={item} />
            ))
          }
        </div>
      </div>



    </main>
  )
}
