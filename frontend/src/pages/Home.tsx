import React from 'react';
import { IonButtons, IonButton, IonIcon, IonContent, IonGrid, IonHeader, IonCard, IonMenuButton, IonItem, IonText, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonImg, isPlatform, IonCardTitle, IonCardContent, IonAccordion } from '@ionic/react';
import { logOutOutline, callOutline, locationOutline, mailOutline } from 'ionicons/icons';

import Footer from '../components/Footer';

import '../styles/Home.css';

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-justify-content-center'>Home</IonTitle>
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

                <IonGrid>
                    <IonCard color='primary' className='ion-padding home-card'>
                        <IonRow className='ion-padding ion-justify-content-center'>
                            <IonCol size='4'>
                                {/* <IonImg src='/img/TA-background.png'></IonImg> */}
                                <IonRow>
                                    <IonCol>
                                        <IonTitle className='home-title'>Escuela de Bellas</IonTitle>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonTitle className='home-title'>Artes de Trujillo Alto</IonTitle>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonText className='home-text'>No dejes pasar la oportunidad de aprender algo nuevo</IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonText className='home-text'>hoy, clases abiertas para niños, jovenes y adultos</IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonButton className='btn-padding-left' fill='outline' color={'light'} shape='round'>Ver Cursos</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol size='4'>
                                <IonImg className='logo-home' src='/img/TA-background.png'></IonImg>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                </IonGrid>
                <IonGrid>
                    <IonRow className=''>
                        <IonCol className='ion-padding ion-text-center number-cards'>
                            <IonTitle color='primary' className='number-cards-title'>78</IonTitle>
                            <IonText color='primary'>Cursos disponibles</IonText>
                        </IonCol>
                        <IonCol className='ion-padding ion-text-center number-cards'>
                            <IonTitle color='primary' className='number-cards-title'>78</IonTitle>
                            <IonText color='primary'>Sesiones por curso</IonText>
                        </IonCol>
                        <IonCol className='ion-padding ion-text-center number-cards'>
                            <IonTitle color='primary' className='number-cards-title'>100+</IonTitle>
                            <IonText color='primary'>Profesores certificados</IonText>
                        </IonCol>
                        <IonCol className='ion-padding ion-text-center'>
                            <IonTitle color='primary' className='number-cards-title'>300+</IonTitle>
                            <IonText color='primary'>Estudiantes matriculados</IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonCard>
                    <IonTitle>Agrupaciones y Conjuntos</IonTitle>
                    <IonAccordion>

                    </IonAccordion>
                </IonCard>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Home;
