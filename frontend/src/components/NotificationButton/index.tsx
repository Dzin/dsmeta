import icon from '../../assets/img/notification-icon.svg'

import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-send-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
