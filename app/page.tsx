import styles from './page.module.css'
import Nav from './Components/Nav'
import Data from '@/lib/data.json'
import FollowersDisplay from './Components/FollowersDisplay'
import overviewDisplay from './Components/OverviewDisplay'

export default function Home() {

  const data: Data = Data


  // <div>
  //     <h1 className={styles.overview_Title}>Overview - Today</h1>
  //   {
  //     data.tiles.overviewTiles.map((params) => overviewDisplay(params))
  //   }
  // </div>





  return (
    <main className={styles.main}>
      <Nav />
      <FollowersDisplay params={Data.tiles.displayTiles[0]} />
      {/* <div>
        {
          data.tiles.displayTiles.map((item) => (
            <FollowersDisplay params={item} />
          ))
        }
      </div> */}
    </main>
  )
}
