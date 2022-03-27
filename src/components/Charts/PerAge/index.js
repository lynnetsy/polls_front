import Card from "../../Card";
import './styles.css'

const ChartTitle = () => {
    return (
        <h2 className="chart-total-title">Uso de redes sociales por rango de edad</h2>
    )
}

const ChartPerAge = ({ data }) => {

    return (
        <Card header={<ChartTitle />}>
            <table className="chart-pa-table">
                <thead>
                    <tr>
                        <th>Red Social</th>
                        <th>Rango de edad</th>
                        <th>Horas</th>
                    </tr>
                </thead>
                <tbody>
                    {data === null ? (<tr><td colSpan="3">...</td></tr>) : (
                        data.map((i, k) => {
                            return (
                                <tr key={k}>
                                    <td className="title">
                                        {i.label}
                                    </td>
                                    <td>
                                        {i.range}
                                    </td>
                                    <td>
                                        {i.hours}
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </Card>
    )

}

export default ChartPerAge