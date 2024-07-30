import React, { useState } from 'react';
import {
    IonButtons,
    IonContent,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonModal,
    IonList, 
    IonItem,
    IonLabel,
    IonFooter
    
} from '@ionic/react';

import { addOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';


// Eventualmente se traeran los cursos de la base de datos
const courses = [
    { id: 1, title: 'Canto', subtitle: 'Profesor - Salon', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/sing.jpg' },
    { id: 2, title: 'Arte Básico', subtitle: 'Profesor - Salon', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/art.jpg' },
    { id: 3, title: 'Guitarra II', subtitle: 'Profesor - Salon', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/guitar.jpg' },
    { id: 4, title: 'Piano I', subtitle: 'Profesor - Salon', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/piano.jpg' },
    // Add more courses as needed
];

const CourseSelection: React.FC = () => {

    // Initialization of variables
    const history = useHistory();
    const [searchText, setSearchText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);


    // Handler functions
    const handleSearch = (event: CustomEvent) => {
        setSearchText(event.detail.value);
    };

    const handleFabClick = () => {
        history.push('/CourseCreation');
    };

    const handleMoreInfoClick = (course: any) => {
        setSelectedCourse(course);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
    };

    // Function to normalize strings
    const normalizeString = (str: string) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    };

    const filteredCourses = courses.filter(course =>
        normalizeString(course.title).includes(normalizeString(searchText))
    );

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Selección de Curso</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">
                <IonHeader collapse="condense" color='primary'>
                    <IonToolbar>
                        <IonTitle size="large">Selección de Curso</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                    <IonFabButton onClick={handleFabClick}>
                        <IonIcon ios={addOutline} md={addOutline} />
                    </IonFabButton>
                </IonFab>

                {/* Search Bar */}
                <IonSearchbar
                    showClearButton="always"
                    placeholder="Búsqueda por curso"
                    value={searchText}
                    onIonInput={handleSearch}
                />

                {/* Grid of Course Cards */}
                <IonGrid>
                    <IonRow className='ion-justify-content-center'>
                        {filteredCourses.map(course => (
                            <IonCol key={course.id} size="6" size-md="3">
                                <IonCard>
                                    <img alt={course.title} src={course.img} />
                                    <IonCardHeader>
                                        <IonCardTitle>{course.title}</IonCardTitle>
                                        <IonCardSubtitle>{course.subtitle}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>{course.description}</IonCardContent>
                                    <IonButton fill="clear" onClick={() => handleMoreInfoClick(course)}>Ver más</IonButton>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                {/* Modal for More Info */}
                <IonModal className="ion-padding" isOpen={showModal} onDidDismiss={handleCloseModal}>
                    <IonHeader>
                        <IonToolbar color='primary'>
                            <IonTitle>Información del Curso</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={handleCloseModal}>Cerrar</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {selectedCourse && (
                            <div>
                                <img alt={selectedCourse.title} src={selectedCourse.img} />
                                <IonList>
                                    <IonItem>
                                        <IonLabel><h2>{selectedCourse.title}</h2></IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel><h3>{selectedCourse.subtitle}</h3></IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel><p>{selectedCourse.description}</p></IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel><p>Cupos / secciones</p></IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel><p>Horarios</p></IonLabel>
                                    </IonItem>
                                    {/* Add more course details here if needed */}
                                </IonList>
                               
                            </div>
                        )}
                        <IonFooter>
                            <IonToolbar>
                                <IonButtons slot="end">
                                    <IonButton fill="solid" color='primary'>Matricularse</IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonFooter>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default CourseSelection;