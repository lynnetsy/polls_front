import ChartTotal from "../../components/Charts/Total"
import './styles.css'
import { useEffect, useState } from "react"
import axios from "axios"

const StatsPage = () => {
    const [ stats, setStats ] = useState(null)
    useEffect(async () => {
        const { data } = await axios.get("http://localhost:8080/api/v1/polls/stats")
        setStats(data)
    }, [])
    return (
        <div className="stats-page">
            <div className="stats-page-container">
                <ChartTotal total={stats === null ? "..." : stats.total}/>
            </div>
        </div>
    )
}

export default StatsPage