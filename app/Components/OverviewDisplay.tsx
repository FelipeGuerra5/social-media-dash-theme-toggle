import Image from 'next/image'
import Styles from '@/app/page.module.css'
import Up from '@/public/images/icon-up.svg'
import Down from '@/public/images/icon-down.svg'

type Props = {
    params: overviewToday
}

export default function OverviewDisplay({ params }: Props): JSX.Element {

    return (
        <div className={Styles.overview_tile} key={params.network + "-" + params.amount}>
            <div>
                <h1 className={Styles.param_icon}>
                    {params.parameter}
                    <Image src={params.networkIcon} width={15} height={15} alt={params.network} />
                </h1>
            </div>
            <div className={Styles.growing}>
                {params.amount}
                <div>
                    {
                        params.growing ?
                            <Image src={Up} width={10} height={10} alt={`Picture for growing`}></Image> :
                            <Image src={Down} width={10} height={10} alt={`Picture for decreasing`}></Image>
                    }
                    {params.percentile}
                </div>
            </div>
        </div>
    )
}
