import './App.css';
import { getFacturas } from './API/requests';
import { Container, Button } from "@mui/material";
import { useState, useEffect } from 'react';
import FacturasComponent from "./Components/Facturas";
import CreditNoteComponent from "./Components/CreditNotes";
import ModalComponent from './Components/Modal';


function App() {
  const [facturas, setFacturas] = useState([]);
  const [creditNotes, setCreditNotes] = useState([]);
  const [selectedFacturaId, setSelectedFacturaId] = useState(null);
  const [selectedCreditNoteId, setSelectedCreditNoteId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedFacturaId(null);
    setSelectedCreditNoteId(null);
  };

  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <FacturasComponent
          facturas={facturas}
          onFacturaSelect={setSelectedFacturaId}
        />
      </div>

      <div style={{ margin: '100px 0' }}></div>

      <div style={{ textAlign: 'center' }}>
        {selectedFacturaId ? (
          <CreditNoteComponent
            creditNotes={creditNotes}
            id_factura={selectedFacturaId}
            onCreditNoteSelect={setSelectedCreditNoteId}
          />
        ) : null}
      </div>

      <div style={{ margin: '100px 0', textAlign: 'center' }}>
        {selectedCreditNoteId ? (
          <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Asignar
            </Button>
            <ModalComponent
              modalOpen={modalOpen}
              handleClose={handleClose} />
          </div>
        ) : null}
      </div>
    </Container >
  );
}

export default App;
