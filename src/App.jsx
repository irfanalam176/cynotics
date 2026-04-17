import 'bootstrap/dist/css/bootstrap.min.css';
import './customizedBootstrap.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import SplashScreen from './pages/splashScreen';
import SplashScreen2 from './pages/splashScreen2';
import AdminLogin from './pages/adminLogin';
import ForgotPassword from './pages/forgotPassword';
import CodeVerification from './pages/codeVerification';
import EmailVerification from './pages/emailVerification';
import ChangePassword from './pages/changePassword';
import AccountSettings from './pages/accountSettings'
import Notification from './pages/notification'
import PrivacyPolicy from './pages/privacyPolicy'
import TermsOfUse from './pages/termsOfUse'
import Dashboard from './pages/dashboard'
import Chemistry from './pages/chemistry'
import EdiClass from './pages/editClass'
import SelfCheck from './pages/selfCheck'
import Help from './pages/help';
import ManageKeys from './pages/manageKeys';
import AssignClass from './pages/assignClass';
import SelectedClass from './pages/selectedClass';
import AddTeacher from './pages/addTeacher';
import SelectClass from './pages/selectClass';
import CreateClass from './pages/createClass';
import EditTeacher from './pages/editTeacher';
import AddStudent from './pages/addStudent';
import DeleteClass from './pages/deleteClass';
import sidebarToggle from './components/sidebarToggler';

import TeacherLogin from './pages/teacher/teacherLogin';
import TeacherForgotPassword from './pages/teacher/forgotPassword';
import TeacherCodeVerification from './pages/teacher/codeVerification';
import TeacherEmailVerification from './pages/teacher/emailVerification';
import TeacherChangePassword from './pages/teacher/changePassword';
import TeacherDashboard from './pages/teacher/dashboard';
import TeacherAccountSettings from './pages/teacher/accountSettings';
import TeacherNotification from './pages/teacher/notification';
import TeacherPrivacyPolicy from './pages/teacher/privacyPolicy';
import TeacherTermsOfUse from './pages/teacher/termsOfUse';
import TeacherChemistry from './pages/teacher/chemistry';
import TeacherSelfCheck from './pages/teacher/selfCheck';


function App() {
  const handleSidebarToggle = () => {
    sidebarToggle();
  }
  return (
    // <div className="App" onTouchMove={handleSidebarToggle}>
    <div className="App">
      <Routes>
        <Route path='/sp2' Component={SplashScreen} />
        <Route path='/' Component={SplashScreen2} />
        <Route path='/admin/login' Component={AdminLogin} />
        <Route path='/admin/forgot-password' Component={ForgotPassword} />
        <Route path='/admin/code-verification' Component={CodeVerification} />
        <Route path='/admin/email-verification' Component={EmailVerification} />
        <Route path='/admin/change-password' Component={ChangePassword} />

        <Route path='/admin/account-settings' Component={AccountSettings} />
        <Route path='/admin/notifications' Component={Notification} />
        <Route path='/admin/help' Component={Help} />
        <Route path='/admin/manage-keys' Component={ManageKeys} />
        <Route path='/admin/privacy-policy' Component={PrivacyPolicy} />
        <Route path='/admin/terms-of-use' Component={TermsOfUse} />

        <Route path='/admin/dashboard' Component={Dashboard} />
        <Route path='/admin/chemistry' Component={Chemistry} />
        <Route path='/admin/self-check' Component={SelfCheck} />

        <Route path='/admin/add-teacher' Component={AddTeacher} />
        <Route path='/admin/edit-teacher' Component={EditTeacher} />

        <Route path='/admin/create-class' Component={CreateClass} />
        <Route path='/admin/edit-class' Component={EdiClass} />
        <Route path='/admin/delete-class' Component={DeleteClass} />
        <Route path='/admin/select-class' Component={SelectClass} />
        <Route path='/admin/assign-class' Component={AssignClass} />
        <Route path='/admin/selected-class' Component={SelectedClass} />
        <Route path='/admin/add-student-class' Component={AddStudent} />


        {/* Teacher Pages */}
        <Route path='/teacher/login' Component={TeacherLogin} />
        <Route path='/teacher/forgot-password' Component={TeacherForgotPassword} />
        <Route path='/teacher/code-verification' Component={TeacherCodeVerification} />
        <Route path='/teacher/email-verification' Component={TeacherEmailVerification} />
        <Route path='/teacher/change-password' Component={TeacherChangePassword} />

        <Route path='/teacher/dashboard' Component={TeacherDashboard} />
        <Route path='/teacher/account-settings' Component={TeacherAccountSettings} />
        <Route path='/teacher/notifications' Component={TeacherNotification} />
        <Route path='/teacher/privacy-policy' Component={TeacherPrivacyPolicy} />
        <Route path='/teacher/terms-of-use' Component={TeacherTermsOfUse} />
        <Route path='/teacher/chemistry' Component={TeacherChemistry} />
        <Route path='/teacher/self-check' Component={TeacherSelfCheck} />


      </Routes>
    </div>
  );
}

export default App;
