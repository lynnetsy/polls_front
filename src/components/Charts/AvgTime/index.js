import './styles.css'
import Card from "../../Card"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const ChartTitle = () => {
    return (
        <h2 className="chart-total-title">Tiempo promedio por red social</h2>
    )
}

const AvgTime = ({ data }) => {
    const colors = {
        facebook:'#1b74e3',
        instagram: '#c9016d',
        tiktok: '#69c9d1',
        twitter: '#1c9cef',
        whatsapp: '#58f978',
    }

    const arr = []
    for ( const sn in data) {
        arr.push({
            name: sn,
            total: data[sn],
            color: colors[sn]
        })
    }

    return (
        <Card header={<ChartTitle />}>
            { data === null ? "..." : (
                <div className="chart-avg-container">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={arr}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="total" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </Card>
    )
}

export default AvgTime