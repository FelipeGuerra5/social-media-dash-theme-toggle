type overviewToday = {
    network: string,
    networkIcon: string,
    parameter: string,
    amount: string,
    percentile: number,
    growing: boolean,
}

type followersDisplay = {
    network: string,
    networkIcon: string,
    alias: string,
    amount: string,
    label: string,
    difference: number,
    growing: boolean,
}

type Data = {
    tiles: {
        displayTiles: followersDisplay[],
        overviewTiles: overviewToday[]
    }
}