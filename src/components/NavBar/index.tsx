import style from './Navbar.module.scss';
import classNames from 'classnames';

function NavBar() {

    const menu = [
        {
            nome: 'Início',
            link: '#inicio'
        },
        {
            nome: 'Sobre mim',
            link: '#sobre-mim'
        },
        {
            nome: 'Projetos',
            link: '#projetos'
        },
    ];

    return (
        <nav className={style.Navbar}>
            <ul className={style.Navbar_list}>
                {menu.map((item, indice) =>(
                    <li key={indice} className={classNames({
                        [style.Navbar_item]: true,
                        [style.Navbar_item__ativo]: false
                    })}>
                        <a href={item.link} className={style.Navbar_item_link}>
                            {item.nome}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;