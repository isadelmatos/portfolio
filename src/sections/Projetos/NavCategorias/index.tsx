import style from './NavCategorias.module.scss';


function NavCategorias({categoria, setCategoria}: {categoria: string, setCategoria: React.Dispatch<React.SetStateAction<string>>}) {

    const categorias = ['Páginas', 'Componentes', 'Desafios', 'Acadêmicos'];

    return (
        <nav className={style.NavCategorias}>
            <ul>
                {categorias.map((item, indice) => (
                    <li key={indice}>
                        <button
                            className={`${item === categoria ? style.ativo : ''}`}
                            onClick={() => (setCategoria(categorias[indice]))}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavCategorias;