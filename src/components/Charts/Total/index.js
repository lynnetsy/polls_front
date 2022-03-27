import Card from "../../Card"
import './styles.css'

const ChartTotalTitle = () => {
    return (
        <h2 className="chart-total-title">Total de encuestas</h2>
    )
}

const ChartTotal = ({ total }) => {
    return (
        <Card header={<ChartTotalTitle />} className="chart-total">
            <span className="chart-total-label">
                {total}
            </span>
        </Card>
    )
}

export default ChartTotal