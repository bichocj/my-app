import React, { useState } from 'react';
import Login from './components/login';
import PersonForm from './components/personForm';
import PackForm from './components/packForm';
import ThanksMessage from './components/thanksMessage';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    Login,
    PersonForm,
    PackForm,
    ThanksMessage
  ]
  const Cmp = steps[currentStep];
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  }
  return (
    <Cmp goToNextStep={goToNextStep} />
  );
}

export default App;
