import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

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

function ModalComponent({ modalOpen, handleClose }) {
    return (
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
    );
}

export default ModalComponent;
