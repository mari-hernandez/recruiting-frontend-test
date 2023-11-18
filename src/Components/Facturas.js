import React, { useState } from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TableCell, TableRow } from "@mui/material";
import { transformAmount } from './shared_functions';



function FacturasComponent({ facturas, onFacturaSelect }) {
    const [selectedFacturaId, setSelectedFacturaId] = useState('');

    const handleFacturaChange = (event) => {
        const selectedId = event.target.value;
        onFacturaSelect(selectedId);
        setSelectedFacturaId(selectedId);
    };

    return (
        <FormControl>
            <FormLabel
                id="demo-radio-buttons-group-label"
                align='center'
                style={{ color: 'black', fontWeight: 'bold' }}
            >
                Selecciona una factura
            </FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={selectedFacturaId}
                onChange={handleFacturaChange}
            >
                {facturas.map((factura) => (
                    <TableRow key={factura.id}>
                        <TableCell align="right">
                            <FormControlLabel
                                value={factura.id}
                                control={<Radio />}
                                label={(
                                    <span>
                                        <span style={{ color: 'black' }}>{factura.id}</span>
                                        <span style={{ color: 'gray' }}> ({factura.organization_id})</span>
                                    </span>
                                )}
                                name="boton"
                            />
                        </TableCell>
                        <TableCell align="center">{transformAmount(factura.amount, factura.currency)}</TableCell>
                        <TableCell align="right" style={{ color: 'gray' }}>Recibida</TableCell>
                    </TableRow>
                ))}
            </RadioGroup>
        </FormControl>
    );
}

export default FacturasComponent;
