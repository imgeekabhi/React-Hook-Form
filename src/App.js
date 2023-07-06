import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import BasicForm from './Components/BasicForm';
import FormValidation from './Components/FormValidation';
import AdvancedFeature from './Components/AdvancedFeature';
function App() {
  return (
    <div className='App'>
      <BasicForm />
      {/* <FormValidation /> */}
      {/* <AdvancedFeature /> */}
    </div>
  );
}

export default App;
