import React, { useState } from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TableCell, TableRow } from "@mui/material";
import { transformAmount } from './shared_functions';



function CreditNoteComponent({ creditNotes, id_factura, onCreditNoteSelect }) {
    // Filter credit notes by reference: ${id-factura-seleccionada}
    creditNotes = creditNotes.filter(creditNote => creditNote.reference === id_factura);
    const [selectedCreditNoteId, setSelectedCreditNoteId] = useState('');

    const handleCreditNoteChange = (event) => {
        const selectedId = event.target.value;
        setSelectedCreditNoteId(selectedId);
        onCreditNoteSelect(selectedId);
    };

    return (
        <FormControl>
            <FormLabel
                id="demo-radio-buttons-group-label"
                align='center'
                style={{ color: 'black', fontWeight: 'bold' }}
            >
                Selecciona una nota de crédito
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={selectedCreditNoteId}
                onChange={handleCreditNoteChange}
            >
                {creditNotes.map((CreditNote) => (
                    <TableRow key={CreditNote.id}>
                        <TableCell align="right">
                            <FormControlLabel
                                value={CreditNote.id}
                                control={<Radio />}
                                label={(
                                    <span>
                                        <span style={{ color: 'black' }}>{CreditNote.id}</span>
                                        <span style={{ color: 'gray' }}> ({CreditNote.organization_id})</span>
                                    </span>
                                )}
                                name="boton"
                            />
                        </TableCell>
                        <TableCell align="center">{transformAmount(CreditNote.amount, CreditNote.currency)}</TableCell>
                        <TableCell align="right" style={{ color: 'gray' }}>{id_factura}</TableCell>
                    </TableRow>
                ))}
            </RadioGroup>
        </FormControl>
    );
}

export default CreditNoteComponent;
