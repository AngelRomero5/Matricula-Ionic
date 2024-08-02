import React, { useState } from 'react';
import {
    IonContent,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonCard,
    IonInput,
    IonList,
    IonButton,
    IonLabel,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol

} from '@ionic/react';
import { layersOutline, library, peopleCircleOutline, readerOutline, schoolOutline, camera, addCircleOutline } from 'ionicons/icons';

const CourseCreation: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <IonContent>
            <IonCard className='ion-padding'>
                <IonList>
                    <IonItem>
                        <IonIcon color='primary' slot="start" icon={library} aria-hidden="true" />
                        <IonInput id="name" labelPlacement="floating" label="Nombre del curso"></IonInput>
                    </IonItem>
                    <IonItem className='ion-padding-top'>
                        <IonIcon color='primary' slot="start" icon={readerOutline} aria-hidden="true" />
                        <IonTextarea
                            className="des"
                            id="description"
                            labelPlacement="floating"
                            label="Descripción"
                            autoGrow={true}
                        ></IonTextarea>
                    </IonItem>
                    <IonItem className='ion-padding-top'>
                        <IonIcon color='primary' slot="start" icon={layersOutline} aria-hidden="true" />
                        <IonInput id="sections" labelPlacement="floating" type="number" label="# de secciones" ></IonInput>
                    </IonItem>
                    <IonItem className='ion-padding-top'>
                        <IonIcon color='primary' slot="start" icon={peopleCircleOutline} aria-hidden="true" />
                        <IonInput labelPlacement="floating" type="number" label="Cupo"></IonInput>
                    </IonItem>
                    <IonItem className='ion-padding-top'>
                        <IonIcon color='primary' slot="start" icon={schoolOutline} aria-hidden="true" />
                        <IonSelect id="professor" label="Profesor" labelPlacement="floating">
                            <IonSelectOption value="Profesor1">Profesor1</IonSelectOption>
                            <IonSelectOption value="Profesor2">Profesor2</IonSelectOption>
                            <IonSelectOption value="Profesor3">Profesor3</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem className='ion-padding-top ion-padding-bottom'>
                        <IonIcon color='primary' slot="start" icon={camera} aria-hidden="true" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            id="fileInput"
                        />
                        <IonLabel>Imágen del curso</IonLabel>
                        <IonButton fill="outline" slot="end" onClick={() => document.getElementById('fileInput')?.click()}>
                            Seleccionar Imágen
                        </IonButton>
                    </IonItem>
                    {selectedImage && (
                        <IonItem>
                            <img src={selectedImage as string} alt="Selected Course" style={{ width: '100%' }} />
                        </IonItem>
                    )}
                </IonList>
                <IonGrid>
                    <IonRow className='ion-align-items-center'>
                        <IonCol className='ion-text-end'>
                            <IonButton fill='solid'>
                                <IonIcon slot="start" icon={addCircleOutline} aria-hidden="true" />
                                Guardar
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </IonContent>
    );
};

export default CourseCreation;
