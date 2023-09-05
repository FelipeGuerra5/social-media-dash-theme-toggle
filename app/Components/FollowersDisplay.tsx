import Styles from '@/app/page.module.css'
import youtube from '@/public/images/icon-youtube.svg'
import instagram from '@/public/images/icon-instagram.svg'
import twitter from '@/public/images/icon-twitter.svg'
import facebook from '@/public/images/icon-facebook.svg'
import Up from '@/public/images/icon-up.svg'
import Down from '@/public/images/icon-down.svg'

type Props = {
    params: followersDisplay
}

export default function FollowersDisplay({ params }: Props): JSX.Element {

    const percentileText = 'testing'

    // const growing = params.growing ? <up /> : down

    return (
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
                {percentileText}
                <Up />
            </p>
        </div>
    )
}
