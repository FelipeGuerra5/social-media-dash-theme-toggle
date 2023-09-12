import Image from 'next/image'
import Styles from '@/app/page.module.css'
import Up from '@/public/images/icon-up.svg'
import Down from '@/public/images/icon-down.svg'

type Props = {
    params: overviewToday
}

export default function OverviewDisplay({ params }: Props): JSX.Element {

    return (
        <div className={Styles.overview_tile}>
            <div className={Styles.overview_tile_top}>
                <h1 className={Styles.param_icon}>
                    {params.parameter}
                </h1>
                <Image src={params.networkIcon} width={20} height={20} alt={params.network} />
            </div>
            <div className={Styles.overview_tile_today_growth}>
                {params.amount}
                <div
                    className={
                        params.growing ?
                            Styles.overview_growing_up :
                            Styles.overview_growing_down
                    }>
                    <div>

                        {
                            params.growing ?
                                <Image
                                    src={Up}
                                    width={8}
                                    height={8}
                                    alt={`Picture for growing`}
                                    className={Styles.growing_arrow}
                                /> :
                                <Image
                                    src={Down}
                                    width={8}
                                    height={8}
                                    alt={`Picture for decreasing`}
                                    className={Styles.growing_arrow}
                                />
                        }
                        {params.percentile}%
                    </div>
                </div>
            </div>
        </div>
    )
}
