import './App.css';
import { getFacturas } from './API/requests';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container, Button } from "@mui/material";
import { useState, useEffect } from 'react';
import FacturasComponent from "./Components/Facturas";
import CreditNoteComponent from "./Components/CreditNotes";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300, // Ancho personalizable
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function TicketHeader() {
  return (
    <div style={{ textAlign: 'center' }}>
      ✅
    </div>
  );
}

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

            <Modal open={modalOpen} onClose={handleClose}>
              <Box sx={modalStyle}>
                <Paper>
                  <TicketHeader />
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Nota de crédito asignada correctamente
                  </Typography>

                  <Button
                    sx={{ mt: 3 }}
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                  >
                    Seguir asignando
                  </Button>
                </Paper>
              </Box>
            </Modal>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export default App;
