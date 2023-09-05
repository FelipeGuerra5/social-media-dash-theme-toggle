import Styles from '@/app/page.module.css'

import youtube from '@/public/images/icon-youtube.svg'
import instagram from '@/public/images/icon-instagram.svg'
import twitter from '@/public/images/icon-twitter.svg'
import facebook from '@/public/images/icon-facebook.svg'
import up from '@/public/images/icon-up.svg'
import down from '@/public/images/icon-down.svg'

export default function FollowersDisplay( params : overviewToday): JSX.Element {

    const smallTile = (
        <div className={Styles.small_tile}>
            <div>
                <h1 className={Styles.param_icon}>
                    {params.parameter}
                    {params.network}
                </h1>
            </div>
            <div className={Styles.growing}>
                {params.amount}
                <div>
                    {params.growing ? up : down}
                    {params.percentile}
                </div>
            </div>
        </div>
    )

    return smallTile
}
