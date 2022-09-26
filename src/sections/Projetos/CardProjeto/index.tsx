import style from './CardProjeto.module.scss';
import {BsGithub} from 'react-icons/bs';
import placeholder from '../../../assets/Placeholder.png';
import projetos from '../projetos.json';

type Projeto = typeof projetos[0];

function CardProjeto({titulo, link, descricao, StackTags}: Projeto) {
    return (
        <div className={style.CardProjeto}>
            <img src={placeholder} alt="" />

            <div className={style.CardProjeto_conteudo}>
                <div className={style.Conteudo_titulo}>
                    <h4>{titulo}</h4>
                    <a href={link} target='blank'><BsGithub size='2.6rem'/></a>
                </div>

                <p className={style.Conteudo_paragrafo}>
                    {descricao}
                </p>

                <ul className={style.Conteudo_listaTecnologias}>
                    {StackTags.map((item, indice) => (<li key={indice}>{item}</li>))}
                </ul>
            </div>
        </div>
    );
}

export default CardProjeto;