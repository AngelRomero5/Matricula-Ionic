import React from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { settingsOutline, libraryOutline, createOutline, homeOutline } from 'ionicons/icons';
import '../styles/Menu.css'

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}
// TODO se tienen q cambiar los iconos y anadir todas las paginas que estaran disponibles desde el menu
// No todas las paginas se accesaran desde el menu. Algunas se veran luego de realizar alguna acción
const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Selección de Cursos',
    url: '/CourseSelection',
    iosIcon: libraryOutline,
    mdIcon: libraryOutline
  },
  {
    title: 'Administración de Cursos',
    url: '/CourseAdministration',
    iosIcon: createOutline,
    mdIcon: createOutline
  },
  {
    title: 'Ajustes',
    url: '/UserSettings',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  }
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Matricula</IonListHeader>
          <IonNote>test@correo.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
