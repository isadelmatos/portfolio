import { useState } from 'react';
import style from './style.module.scss';
import { BsClipboard, BsCheck2 } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';

function EmailPlaceholder() {

    const [copy, setCopy] = useState(false);

    const email = 'isabelamcalixto@gmail.com';

    const copiarEmail= () => {
        navigator.clipboard.writeText(email);
        setCopy(true);

        setTimeout(() => {
            setCopy(false);
        }, 2000);
    };

    return (
        <div className={style.EmailPlaceholder}>
            <label htmlFor="email">Me contate</label>
            <div className={style.EmailPlaceholder_inputActions}>
                <input type="email" id="email" value={email} disabled/>
                <button onClick={()=>copiarEmail()}>
                    {copy ? <BsCheck2 size='2rem'/> : <BsClipboard size='2rem'/>}
                </button>
                <button>
                    <a href="mailto:isabelamcalixto@gmail.com" style={{cursor: 'pointer'}}>
                        <IoIosSend size='2rem'/>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default EmailPlaceholder;