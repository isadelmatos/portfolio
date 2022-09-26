import style from './style.module.scss';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoLogoCodepen } from 'react-icons/io';

function LinkTree({mobile}: {mobile?: boolean}) {
    return ( 
        <ul className={`${mobile ? style.LinkTreeMobile : style.LinkTree}`}>
            <li>
                <a href="https://github.com/isadelmatos" target='blank'>
                    <BsGithub size='3rem'/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/isabelacalixto/" target='blank'>
                    <BsLinkedin size='3rem'/>
                </a>
            </li>
            <li>
                <a href="https://codepen.io/isadelmatos" target='blank'>
                    <IoLogoCodepen size='3.6rem'/>
                </a>
            </li>
        </ul> 
    );
}

export default LinkTree;