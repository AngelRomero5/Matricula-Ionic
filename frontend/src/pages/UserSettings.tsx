import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, isPlatform } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import Footer from '../components/Footer';



const UserSettings: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-justify-content-center'>Ajustes</IonTitle>
                    <IonButton slot='end' fill='clear' color='light'>
                        <IonIcon slot="icon-only" icon={logOutOutline} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {!isPlatform('ios') && (
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle className='ion-justify-content-center' size="large">Home</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                )}
                <div className="content-wrapper">
                    <div className="content">
                    </div>
                    <Footer />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default UserSettings;
