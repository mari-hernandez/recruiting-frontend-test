import './App.css';
import { getFacturas } from './API/requests';
import { Container } from "@mui/material";
import { useState, useEffect } from 'react';
import FacturasComponent from "./Components/Facturas";
import CreditNoteComponent from "./Components/CreditNotes";

function App() {
  const [facturas, setFacturas] = useState([]);
  const [creditNotes, setCreditNotes] = useState([]);
  const [selectedFacturaId, setSelectedFacturaId] = useState(null);

  // Get facturas
  // Filter facturas by type (received, credit_note)
  useEffect(() => {
    const fetchFacturas = async () => {
      const allFacturas = await getFacturas();
      const receivedFacturas = allFacturas.filter(factura => factura.type === 'received');
      const creditNotes = allFacturas.filter(factura => factura.type === 'credit_note');

      setFacturas(receivedFacturas);
      setCreditNotes(creditNotes);
    };
    fetchFacturas();
  }, []);


  return (
    <Container>
      <FacturasComponent
        facturas={facturas}
        onFacturaSelect={setSelectedFacturaId}
      ></FacturasComponent>

      <div style={{ margin: '100px 0' }}></div>
      {selectedFacturaId ? (
        <CreditNoteComponent
          creditNotes={creditNotes}
          id_factura={selectedFacturaId}
        ></CreditNoteComponent>
      ) : null}
    </Container>
  );
}

export default App;
