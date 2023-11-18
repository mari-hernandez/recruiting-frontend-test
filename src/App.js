import './App.css';
import { getFacturas } from './API/requests';
import { Container } from "@mui/material";
import { useState, useEffect } from 'react';
import FacturasComponent from "./Components/Facturas";

function App() {
  const [facturas, setFacturas] = useState([]);
  // Filter facturas by type === 'received'
  useEffect(() => {
    const fetchFacturas = async () => {
      const allFacturas = await getFacturas();
      console.log('All Facturas:', allFacturas);
      const receivedFacturas = allFacturas.filter(factura => factura.type === 'received');
      setFacturas(receivedFacturas);
      console.log('Received Facturas:', receivedFacturas);
    };

    fetchFacturas();
  }, []);

  return (
    <Container>

      <FacturasComponent
        facturas={facturas}
      ></FacturasComponent>

    </Container>
  );
}

export default App;
