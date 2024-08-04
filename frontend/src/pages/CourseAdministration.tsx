import React, { useState } from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonIcon,
    IonButton,
    isPlatform
} from '@ionic/react';
import CourseCreation from './CourseCreation';
import CourseEditing from './CourseEditing';
import { pencilOutline, createOutline, logOutOutline } from 'ionicons/icons';
import Footer from '../components/Footer';


const CourseAdministration: React.FC = () => {
    const [selectedSegment, setSelectedSegment] = useState<'creation' | 'editing'>('creation');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-justify-content-center'>Gestión de Cursos</IonTitle>
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

                <IonSegment className='ion-padding-top' value={selectedSegment} onIonChange={e => setSelectedSegment(e.detail.value as 'creation' | 'editing')}>
                    <IonSegmentButton value="creation">
                        <IonLabel>
                            {/* <IonIcon className='ion-padding'  slot="start" icon={createOutline} aria-hidden="true" /> */}
                            Crear Curso
                        </IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="editing">
                        <IonLabel >
                            {/* <IonIcon className='ion-padding' slot="start" icon={pencilOutline} aria-hidden="true" /> */}
                            Editar Curso</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                {selectedSegment === 'creation' && <CourseCreation />}
                {selectedSegment === 'editing' && <CourseEditing />}
            </IonContent>
            <Footer/>
        </IonPage>
    );
};

export default CourseAdministration;
