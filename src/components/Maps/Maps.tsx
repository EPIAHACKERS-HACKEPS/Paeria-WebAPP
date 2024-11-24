import React from 'react';
import styles from './Maps.module.scss';
import Separator from '../Separator/Separator';

function Maps() {
    return (
        <div id='localitzation'>
            <div className={styles.MapsContainer}>
                <Separator />

                <div className={styles.Maps}>
                    <h1>Localització</h1>
                </div>
                <div className={styles.MapIframe}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.415799278953!2d0.6304528759504272!3d41.625143071270564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6e05b91aef9bb%3A0xbfc51556c36b03bf!2sParking!5e0!3m2!1ses!2ses!4v1732386354395!5m2!1ses!2ses"
                        width="100%"
                        height="450"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Maps;
