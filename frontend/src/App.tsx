import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

// Components
import Menu from './components/Menu';
// Pages
import CourseSelection from './pages/CourseSelection';
import CourseCreation from './pages/CourseCreation';
import Home from './pages/Home';
import UserSettings from './pages/UserSettings';
import CourseEditing from './pages/CourseEditing';
import CourseAdministration from './pages/CourseAdministration';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/Home" component={Home} exact={true} />
            <Route path="/CourseSelection" component={CourseSelection} exact={true} />
            <Route path="/CourseAdministration" component={CourseAdministration} exact={true} />
            <Route path="/UserSettings" component={UserSettings} exact={true} />
            <Redirect from="/" to="/Home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
