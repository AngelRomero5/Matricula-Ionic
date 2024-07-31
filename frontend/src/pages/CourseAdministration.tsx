import React, { useState } from 'react';
import {
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonLabel
} from '@ionic/react';
import CourseCreation from './CourseCreation';
import CourseEditing from './CourseEditing';

const CourseAdministration: React.FC = () => {
    const [selectedSegment, setSelectedSegment] = useState<'creation' | 'editing'>('creation');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-justify-content-center'>Gestión de Cursos</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle className='ion-justify-content-center' size="large">Gestión de Cursos</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonSegment className='ion-padding-top' value={selectedSegment} onIonChange={e => setSelectedSegment(e.detail.value as 'creation' | 'editing')}>
                    <IonSegmentButton value="creation">
                        <IonLabel>Crear Curso</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="editing">
                        <IonLabel>Editar Curso</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                {selectedSegment === 'creation' && <CourseCreation />}
                {selectedSegment === 'editing' && <CourseEditing />}
            </IonContent>
        </IonPage>
    );
};

export default CourseAdministration;
