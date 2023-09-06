import Image from 'next/image'
import Styles from '@/app/page.module.css'
import Up from '@/public/images/icon-up.svg'
import Down from '@/public/images/icon-down.svg'

type Props = {
    params: followersDisplay
}

export default function FollowersDisplay({ params }: Props): JSX.Element {

    return (
        <div className={Styles.followers_tile} key={params.network + "-" + params.amount}>
            <div className={params.network}>
                <Image src={params.networkIcon} width={15} height={15} alt={params.network} />
                <p>{params.alias}</p>
            </div>

            <div>
                <div >{params.amount}</div>
                <h1>{params.label}</h1>
            </div>

            <p className={params.growing ? Styles.growing_up : Styles.growing_down}>
                {
                    params.growing ?
                        <Image src={Up} width={10} height={10} alt={`Picture for growing`}></Image> :
                        <Image src={Down} width={10} height={10} alt={`Picture for decreasing`}></Image>
                }
                {params.difference}
            </p>
        </div>
    )
}
