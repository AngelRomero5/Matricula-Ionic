
// Libraries
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonButtons, IonButton, IonIcon, IonContent, IonGrid, IonHeader, IonCard, IonMenuButton, IonText, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonImg, isPlatform } from '@ionic/react';
import { logOutOutline, call, location, mail, openOutline } from 'ionicons/icons';


// Components
import Footer from '../components/Footer';

// Styles
import '../styles/Home.css';
import 'swiper/css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-justify-content-center'>Hogar</IonTitle>
                    <IonButton slot='end' fill='clear' color='light'>
                        <IonIcon slot="icon-only" icon={logOutOutline} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {!isPlatform('ios') && (
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle className='ion-justify-content-center' size="large">Hogar</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                )}

                <div className="content-wrapper">
                    <div className="content">
                        <IonGrid>
                            <IonCard color='primary' className='ion-padding home-card'>
                                <IonRow className='ion-padding ion-justify-content-center'>
                                    <IonCol sizeMd='4' sizeSm='12'>
                                        <IonRow>
                                            <IonCol>
                                                <IonTitle className='home-title'>Escuela de Artes</IonTitle>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol>
                                                <IonTitle className='home-title'>de Trujillo Alto</IonTitle>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol>
                                                <IonText className='home-text'>
                                                    No dejes pasar la oportunidad de aprender algo nuevo hoy. Clases abiertas para niños, jóvenes y adultos. Matricúlate ya.
                                                </IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol>
                                                <IonButton fill='outline' color={'light'} shape='round'>Ver Cursos</IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonCol>
                                    <IonCol sizeMd='4' sizeSm='12'>
                                        <IonImg className='logo-home' src='/img/TA-background.png'></IonImg>
                                    </IonCol>
                                </IonRow>
                            </IonCard>
                        </IonGrid>
                        <IonGrid>
                            <IonRow>
                                <IonCol className='ion-padding ion-text-center number-cards'>
                                    <IonTitle color='primary' className='number-cards-title'>78</IonTitle>
                                    <IonText color='primary'>Cursos disponibles</IonText>
                                </IonCol>
                                <IonCol className='ion-padding ion-text-center number-cards'>
                                    <IonTitle color='primary' className='number-cards-title'>91</IonTitle>
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
                        <IonCard className='swiper-card'>
                            <IonGrid>
                                <IonRow className='ion-justify-content-center ion-text-center ion-padding ion-align-items-center'>
                                    <IonCol sizeMd='4'>
                                        <IonImg src='/img/foto-edificio.png' alt='Facilidades' />
                                    </IonCol>
                                    <IonCol sizeMd='6' className=''>
                                        <IonRow>
                                            <IonCol><IonTitle color='primary' className='swiper-header'>Facilidades</IonTitle></IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol><IonText color='dark'>La escuela de bellas artes de Trujillo Alto cuenta con
                                            dos edificios, cada uno con seguridad y salones con aire acondicionado para
                                            cada curso en donde los estudiantes podrán desarrollarse y crecer en un ambiente
                                            cómodo y seguro.
                                            </IonText></IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol ><IonButton className='ion-padding'>Abrir Mapa <IonIcon color='light' icon={openOutline} /></IonButton></IonCol>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                        <IonGrid className='ion-padding ion-text-center swiper-card'>
                            <IonRow className='ion-padding'>
                                <IonCol>
                                    <IonTitle color='primary' className='ion-padding swiper-header'>Agrupaciones y Conjuntos</IonTitle>
                                </IonCol>
                            </IonRow>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                className="mySwiper">

                                <SwiperSlide>
                                    <div className="slide-content">
                                        <img src='/img/woman-with-violin.jpg' alt='Slide 1' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-content">
                                        <img src='/img/sing.jpg' alt='Slide 2' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-content">
                                        <img src='/img/guitar.jpg' alt='Slide 3' />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <IonRow className='ion-padding-top ion-justify-content-center'>
                                <IonCol>
                                    <IonTitle className='slide-text'>[Nombre de agrupación aquí]</IonTitle>
                                </IonCol>
                            </IonRow>
                            <IonRow className='ion-padding slide-description ion-justify-content-center'>
                                <IonCol size='8'>
                                    <IonText className='slide-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonCard className='contactanos-card ion-padding ion-text-center'>
                            <IonText color='light' className='swiper-header'>Contáctanos</IonText>
                            <IonGrid className='ion-padding'>
                                <IonRow className='ion-padding ion-text-center'>
                                    <IonCol className='icon-text-col' sizeMd='4' sizeSm='12'>
                                        <IonIcon color='primary' icon={call} />
                                        <IonText color='light'>(787) 761-0172 ext. 3122, 3128</IonText>
                                    </IonCol>
                                    <IonCol className='icon-text-col' sizeMd='4' sizeSm='12'>
                                        <IonIcon color='primary' icon={location} />
                                        <IonText color='light'>313-315 Cll La Cruz, Trujillo Alto, 00976</IonText>
                                    </IonCol>
                                    <IonCol className='icon-text-col' sizeMd='4' sizeSm='12'>
                                        <IonIcon color='primary' icon={mail} />
                                        <IonText color='light'>cultura@trujilloaltopr.net</IonText>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                    </div>
                    <Footer />
                </div>
            </IonContent>
        </IonPage>
    );
};
export default Home;