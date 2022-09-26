import style from './SobreMim.module.scss';
import Tecnologia from './Tecnologia';
import {SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiFigma} from 'react-icons/si';

function SobreMim() {

    const stack = [
        {
            tecnologia: 'Javascript',
            icone: [SiJavascript],
        },
        {
            tecnologia: 'Typescript',
            icone: [SiTypescript]
        },
        {
            tecnologia: 'React',
            icone: [SiReact]
        },
        {
            tecnologia: 'Node.js',
            icone: [SiNodedotjs]
        },
        {
            tecnologia: 'HTML e CSS',
            icone: [SiHtml5, SiCss3]
        },
        {
            tecnologia: 'Figma',
            icone: [SiFigma]
        }
    ];


    return (
        <section id='sobre-mim' className={style.SobreMim}>
            <h2>Sobre mim</h2>
            
            <div className={style.SobreMim_paragrafo}>
                <p>Tenho 20 anos e moro na região do ABC em São Paulo. Atualmente faço faculdade de Análise e Desenvolvimento de Sistemas.</p>
                <p>Janeiro de 2022 foi quando comecei a minha jornada na programação graças ao programa da Boticário que oferecia bolsas na plataforma <span className={style.destaque}>Alura</span>, aprendi sobre fundamentos web, lógica de programação e realizei muitos projetos com tecnologias full-stack.</p> 
                <p>Em abril participei do ProUni e consegui uma bolsa de estudos na <span className={style.destaque}>FIAP</span>, que é onde estudo atualmente.</p>
                <p>Estou constantemente estudando e tentando experimentar de tudo um pouco mas o <span className={style.destaque}>front-end</span> é onde me destaco. Além da programação possuo interesses em design, experiência do usuário e acessibilidade.</p>
            </div>

            <div className={style.SobreMim_experiencia}>
                <h3>Experiência</h3>
                <p>Ainda não tenho nenhuma experiência. Estou aberta a ofertas de estágio na área de desenvolvimento web.</p>
                <p>Se você que está lendo tem interesse em me contratar por favor, <a href="mailto:isabelamcalixto@gmail.com"><span className={style.destaque}>entre em contato.</span></a></p>
            </div>

            <div className={style.SobreMim_tecnologias}>
                <h3>Tecnologias que utilizo</h3>
                <ul className={style.SobreMim_tecnologias_lista}>
                    {stack.map((item, index) => <Tecnologia key={index} nome={item.tecnologia} icone={item.icone}/>)}
                </ul>
            </div>
        </section>
    );
}

export default SobreMim;