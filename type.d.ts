type overviewToday = {
    network: string,
    parameter: string,
    amount: string,
    percentile: number,
    growing: boolean,
}

type followersDisplay = {
    network: string,
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