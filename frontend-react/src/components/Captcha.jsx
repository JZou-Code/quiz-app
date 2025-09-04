import React, {useEffect, useState} from 'react';
import {requestCaptcha} from "../api/account.js";

const Captcha = (props) => {
    const [captchaSrc, setCaptchaSrc] = useState('')
    const [captchaFail, setCaptchaFail] = useState(false)
    const [isCaptchaLoading, setIsCaptchaLoading] = useState(true)

    useEffect(() => {
        onCaptchaClick();
    }, []);

    const onCaptchaClick = () => {
        requestCaptcha()
            .then(result => {
                console.log(result)
                props.setCaptchaId(result.data.data.CaptchaId);
                setCaptchaSrc(result.data.data.Image);
                setIsCaptchaLoading(false);
            }).catch(e => {
                setIsCaptchaLoading(false);
                setCaptchaFail(true)
            }
        )
    }

    return (
        <>
            {
                captchaFail ?
                    <div>
                        Try Again
                    </div> :
                    <div>
                        {
                            isCaptchaLoading ? '' :
                                <img
                                    onClick={onCaptchaClick}
                                    src={captchaSrc}
                                    alt='Captcha'
                                />
                        }
                    </div>
            }
        </>
    );
};

export default Captcha;
