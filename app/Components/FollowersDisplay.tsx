import Image from 'next/image'
import Styles from '@/app/page.module.css'
import Up from '@/public/images/icon-up.svg'
import Down from '@/public/images/icon-down.svg'

type Props = {
    params: followersDisplay
}

export default function FollowersDisplay({ params }: Props): JSX.Element {

    return (
        <div className={Styles.followers_tile} id={Styles[`${params.network}`]}>
            <div className={Styles.followers_tile_content}>
                <div className={Styles.followers_tile_title}>


                    <Image src={params.networkIcon} width={20} height={20} alt={params.network} />

                    <p>{params.alias}</p>
                </div>
                <div className={Styles.followers_tile_amount}>
                    <h1>{params.amount}</h1>
                    <h2>{params.label}</h2>
                </div>
                <p className={params.growing ? Styles.followers_growing_up : Styles.followers_growing_down}>
                    {
                        params.growing ?
                            <div className={Styles.growing_arrow}>
                                <Image src={Up} width={10} height={6} alt={`Picture for growing`}></Image></div> :
                            <div className={Styles.growing_arrow}>
                                <Image src={Down} width={10} height={6} alt={`Picture for decreasing`}></Image>
                            </div>
                    }
                    {" " + params.difference + " "}
                    Today
                </p>
            </div>
        </div>
    )
}
