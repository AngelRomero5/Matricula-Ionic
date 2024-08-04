import React from 'react';
import {
    IonIcon,
    IonImg,
    IonRow,
    IonCol,
    IonFooter,
    IonText, 
    IonCard
} from '@ionic/react';

import '../styles/Footer.css';
import { callOutline, locationOutline, mailOutline } from 'ionicons/icons';


const Footer: React.FC = () => {

    return (
        <IonFooter className='footer'>
            <IonCard className='ion-padding card-map '>

                <IonRow className='ion-align-items-center ion-justify-content-center'>
                    <IonCol size='1.5'><IonImg className='logo-footer' src='/img/TA-background.png'></IonImg></IonCol>
                    <IonCol size='4' className='home-text'>
                        <IonRow>
                            <IonCol size='1'> <IonIcon color='light' icon={callOutline} /> </IonCol>
                            <IonCol><IonText color='light'>(787) 761-0172 ext. 3122, 3128</IonText> </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='1'> <IonIcon color='light' icon={locationOutline} /> </IonCol>
                            <IonCol><IonText color='light'>313-315 Cll La Cruz, Trujillo Alto, 00976</IonText></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='1'> <IonIcon color='light' icon={mailOutline} /> </IonCol>
                            <IonCol><IonText color='light'> cultura@trujilloaltopr.net</IonText></IonCol>
                        </IonRow>
                    </IonCol>
                    <IonCol size='6'>
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.853366293935!2d-66.01020342519948!3d18.353972882707556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03678452a53e3f%3A0x31ff2b7a55c397b2!2sEscuela%20de%20Bellas%20Artes%20de%20Trujillo%20Alto!5e0!3m2!1ses-419!2spr!4v1722624791313!5m2!1ses-419!2spr"
                                width="800"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow className='ion-text-center'>
                    <IonCol>
                        <IonText color='light'>© 2024 Todos los derechos reservados.</IonText>
                    </IonCol>
                </IonRow>
            </IonCard>

        </IonFooter>
    );
};

export default Footer;
