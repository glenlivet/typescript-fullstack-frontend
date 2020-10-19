import React from "react";

import 'primereact/resources/themes/saga-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.scss'

import { Button } from "primereact/button";

function App() {
  return (
    <>
      <p data-testid="hello">Hello World!</p>
      <Button data-testid="thumbs_up" icon="pi pi-thumbs-up" label="Thumbs Up" />
    </>
  );
}

export default App;
