import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

function handleClick(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification/`)
            .then(response => {
                console.log("Sucesso!");
            });
}

type Props = {
    saleId: number;
}

function NotificationButton({ saleId } : Props ) {
    return (
        <div className="dsmeta-send-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
