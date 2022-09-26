import { IconType } from 'react-icons';

function Tecnologia({nome, icone}: {nome: string, icone: IconType[]}) {

    const Icon = icone[0];
    const Icon2 = icone[1];

    return (
        <li>
            <Icon style={{'paddingRight': '1rem'}}/>
            {Icon2 && <Icon2 style={{'paddingRight': '1rem'}}/>}
            {nome}
        </li>
    );
}

export default Tecnologia;