import './styles.css'

const CardHeader = ({ children}) => {
    return (
        <div className="card-header">
            { children }
        </div>
    )
} 

const Card = ({ children, header, footer }) => {
    return (
        <div className="card">
            { header ? <CardHeader>{header}</CardHeader> : "" }
            
            <div className="card-body">
                { children }
            </div>
            { footer ? (
                <div className="card-footer">
                    { footer }
                </div>
            ) : "" }
        </div>
    )
}

export default Card