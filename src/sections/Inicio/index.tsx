import style from './Inicio.module.scss';
import './animacao.css';
import EmailPlaceholder from '../../components/EmailPlaceholder';
import {ReactComponent as Avatar} from '../../assets/Avatar.svg';

function Inicio() {
    return (
        <section className={style.inicio}>
            <div className={style.inicio_nomeAvatar}>
                <Avatar />
                <h1>Oie, meu nome é <strong>Isabela.</strong></h1>
            </div>
            <p>Uso da criatividade para construir <strong>aplicações front-end.</strong></p>
            <EmailPlaceholder/>
        </section>
    );      
}

export default Inicio;