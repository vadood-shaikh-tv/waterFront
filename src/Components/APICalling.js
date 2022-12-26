import React, { useEffect } from 'react'
import Axios from '../Service/Instance'

export default function APICalling() {
    const GetApi = async () => {
        const responsss = await Axios.get("https://api.waterfrontconcerts.com/web/ticket-submenus")
        // console.log("responsss", responsss.data.data)
    }
    useEffect(() => {
        GetApi()
    }, [])

    return (
        <div>APICalling</div>
    )
}
// { Season seats 2023 API}
// https://api.waterfrontconcerts.com/web/ticket-submenu?slug=2023-season-seats

// {Faq Shayad}
// https://www.google.com/recaptcha/api2/reload?k=6LfHrSkUAAAAAPnKk5cT6JuKlKPzbwyTYuO8--Vr