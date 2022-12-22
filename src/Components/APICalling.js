import axios from 'axios'
import React, { useEffect } from 'react'

export default function APICalling() {
    const GetApi = async () => {
        const responsss = await axios.get("https://api.waterfrontconcerts.com/events?currentPage=1&eventType=ONSALE&pageSize=4&sortBy=location")
        console.log("responsss", responsss.data.data)
    }
    useEffect(() => {
        GetApi()
    }, [])

    return (
        <div>APICalling</div>
    )
}
