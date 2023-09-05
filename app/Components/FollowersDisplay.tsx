import Styles from '@/app/page.module.css'

import youtube from '@/public/images/icon-youtube.svg'
import instagram from '@/public/images/icon-instagram.svg'
import twitter from '@/public/images/icon-twitter.svg'
import facebook from '@/public/images/icon-facebook.svg'
import up from '@/public/images/icon-up.svg'
import down from '@/public/images/icon-down.svg'


type Props = {
    params: {
        network: string,
        alias: string,
        amount: string,
        label: string,
        difference: number,
        growing: boolean,
    }
}

export default function FollowersDisplay({ params }: Props): JSX.Element {



    const bigTile = (
        <div>
            <div>
                <div className={params.network}></div>
                <p>{params.alias}</p>
            </div>
            <div>
                <div >{params.amount}</div>
                <h1>{params.label}</h1>
            </div>
            <p
                className={
                    params.growing ?
                    Styles.growing_up :
                    Styles.growing_down
                }>
                {params.growing ? up : down}
                {params.difference} Today</p>
        </div>
    )

    return bigTile
}
