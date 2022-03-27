import ChartTotal from "../../components/Charts/Total"
import './styles.css'
import { useEffect, useState } from "react"
import axios from "axios"
import AvgTime from "../../components/Charts/AvgTime"
import ChartFav from "../../components/Charts/Fav"
import ChartPerAge from "../../components/Charts/PerAge"

const StatsPage = () => {
    const [ stats, setStats ] = useState(null)
    useEffect(async () => {
        const { data } = await axios.get("http://localhost:8080/api/v1/polls/stats")
        setStats(data)
    }, [])
    return (
        <div className="stats-page">
            <div className="stats-page-container">
                <div className="stats-page-row">
                    <ChartTotal total={stats === null ? "..." : stats.total}/>
                    <AvgTime data={ stats === null ? null : stats.avg_time} />
                </div>
                <div className="stats-page-row">
                    <ChartFav  data={ stats === null ? null : stats.favorite}/>
                    <ChartPerAge data={ stats === null ? null : stats.per_sn}/>
                </div>
            </div>
        </div>
    )
}

export default StatsPage