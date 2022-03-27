import Card from "../../Card";
import './styles.css'

const ChartTitle = () => {
    return (
        <h2 className="chart-total-title">Orden de redes sociales por favoritos</h2>
    )
}

const ChartFav = ({ data }) => {
    const icons = ["🥇", "🥈", "🥉", "😐", "🥶"]
    return (
        <Card header={<ChartTitle />}>
            { data === null ? "..." : (
                <ul className="chart-fav-list">
                    {data.map((i, k) => {
                        let classes = "chart-fav-name "
                        if (k === 0) {
                            classes += "boldest"
                        }
                        else if (k === 1) {
                            classes += "bolder"
                        }
                        else if (k === 2) {
                            classes += "bold"
                        }

                        return (
                            <li key={k}>
                                <span className="chart-fav-place">
                                    {icons[k]}
                                </span>
                                <span className={ classes }>
                                    {i.label}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            )}
        </Card>
    )
}

export default ChartFav