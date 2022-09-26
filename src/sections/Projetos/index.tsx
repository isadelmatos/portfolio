import style from './Projetos.module.scss';
import NavCategorias from './NavCategorias';
import CardProjeto from './CardProjeto';
import projetos from './projetos.json';
import { useState } from 'react';

function Projetos() {

    const [categoria, setCategoria] = useState('Páginas');

    return (
        <section id='projetos' className={style.Projetos}>
            <h2>Meus projetos</h2>

            <NavCategorias categoria={categoria} setCategoria={setCategoria}/>

            <div className={style.Projetos_cardProjetos}>
                {projetos.map((item, indice) => {
                    if(item.categoria === categoria) {
                        return <CardProjeto key={indice} {...item}/>;
                    }
                })}
            </div>
        </section>
    );
}

export default Projetos;