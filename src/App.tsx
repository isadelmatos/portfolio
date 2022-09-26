import LinkTree from './components/LinkTree';
import NavBar from './components/NavBar';
import Inicio from './sections/Inicio';
import SobreMim from './sections/SobreMim';
import Projetos from './sections/Projetos';
import Fim from './sections/Fim';
import style from './App.module.scss';


function App() {
    return (
        <>
            <header className={style.header} id='inicio'>
                <NavBar/>
            </header>
            <main>
                <LinkTree/>
                <Inicio/>
                <SobreMim/>
                <Projetos/>
                <Fim/>
            </main>
            <footer className={style.footer}>
                <NavBar/>
                <p>Criado por Isabela. Todos os direitos reservados. &copy;</p>
            </footer>
        </>
    );
}

export default App;
