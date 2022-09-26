import style from './Fim.module.scss';
import EmailPlaceholder from '../../components/EmailPlaceholder';
import LinkTree from '../../components/LinkTree';

function Fim() {
    return ( 
        <section className={style.Fim}>
            <p>Obrigada por chegar até aqui!</p>
            <p>Se você gostou dos meus projetos não se esqueça de dar um “oi”.</p>
            <LinkTree mobile={true}/>
            <EmailPlaceholder/>
        </section>
    );
}

export default Fim;