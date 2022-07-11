import NotificationButton from '../NotificationButton'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="hide-992px">ID</th>
                            <th className="hide-576px">Data</th>
                            <th>Vendedor</th>
                            <th className="hide-992px">Visitas</th>
                            <th className="hide-992px">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="hide-992px">#341</td>
                            <td className="hide-576px">28/12/1993</td>
                            <td>Anakin</td>
                            <td className="hide-992px">10</td>
                            <td className="hide-992px">5</td>
                            <td>R$200,00</td>
                            <td>
                                <div className="dsmeta-send-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="hide-992px">#342</td>
                            <td className="hide-576px">28/12/1993</td>
                            <td>Anakin</td>
                            <td className="hide-992px">10</td>
                            <td className="hide-992px">5</td>
                            <td>R$200,00</td>
                            <td>
                                <div className="dsmeta-send-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="hide-992px">#343</td>
                            <td className="hide-576px">28/12/1993</td>
                            <td>Anakin</td>
                            <td className="hide-992px">10</td>
                            <td className="hide-992px">5</td>
                            <td>R$200,00</td>
                            <td>
                                <div className="dsmeta-send-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
