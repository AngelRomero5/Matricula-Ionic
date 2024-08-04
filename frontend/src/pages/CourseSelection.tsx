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
    IonFooter,
    isPlatform

} from '@ionic/react';

import { addOutline, arrowForwardOutline, logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';


// Styles
import '../styles/CourseSelection.css'


// Eventualmente se traeran los cursos de la base de datos
const courses = [
    { id: 1, title: 'Canto', subtitle: 'Ángel Romero - Salón 1D', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/sing.jpg' },
    { id: 2, title: 'Arte Básico', subtitle: 'Ángel Romero - Salón', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/art.jpg' },
    { id: 3, title: 'Guitarra II', subtitle: 'Ángel Romero - Salón', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/guitar.jpg' },
    { id: 4, title: 'Piano I', subtitle: 'Ángel Romero - Salón', description: 'Here is a small text description for the card content. Nothing more, nothing less.', img: '/img/piano.jpg' },
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
        history.push('/CourseAdministration');
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
                    <IonTitle className='ion-justify-content-center'>Selección de Curso</IonTitle>
                    <IonButton slot='end' fill='clear' color='light'>
                        <IonIcon slot="icon-only" icon={logOutOutline} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">
                {!isPlatform('ios') && (
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle className='ion-justify-content-center' size="large">Home</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                )}

                <IonFab horizontal="end" vertical="bottom" slot="fixed" className="ion-padding">
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
                    color='light'
                />

                {/* Grid of Course Cards */}
                <IonGrid>
                    <IonRow className='ion-justify-content-center'>
                        {filteredCourses.map(course => (
                            <IonCol key={course.id} size="12" size-md="3">
                                <IonCard color={'primary'}>
                                    <img alt={course.title} src={course.img} />
                                    <IonCardHeader>
                                        <IonCardTitle className='header-text'>{course.title}</IonCardTitle>
                                        <IonCardSubtitle> Prof. {course.subtitle}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>{course.description}</IonCardContent>
                                    <IonFooter>
                                        <IonToolbar color='primary'>
                                            <IonButton className=" button-text-color ion-padding-right" slot="end" fill="clear" onClick={() => handleMoreInfoClick(course)}>Ver más</IonButton>
                                        </IonToolbar>
                                    </IonFooter>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                {/* Modal for More Info */}
                <IonModal className="ion-padding" isOpen={showModal} onDidDismiss={handleCloseModal}>
                    <IonHeader>
                        <IonToolbar className='ion-padding-top ion-padding-bottom' color='primary'>
                            <IonTitle class='modal-title'>Información del Curso</IonTitle>
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
                                        <IonLabel><h1>{selectedCourse.title}</h1></IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel><h2>{selectedCourse.subtitle}</h2></IonLabel>
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
                                <IonButtons slot="end" className='ion-padding-bottom ion-padding-right'>
                                    <IonButton fill="solid" color='primary'>
                                        Matricularse
                                        <IonIcon className='ion-padding-right' size='small' ios={arrowForwardOutline} md={arrowForwardOutline} />
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonFooter>
                    </IonContent>
                </IonModal>
            </IonContent>
            <Footer />

        </IonPage>
    );
};

export default CourseSelection;