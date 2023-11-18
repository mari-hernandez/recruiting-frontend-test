import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TableCell, TableRow } from "@mui/material";

function CLP_to_USD(amount) {
    return amount / 800;
}

function USD_to_CLP(amount) {
    return amount * 800;
}

function transformAmount(amount, currency) {
    let usd_amount, clp_amount;
    if (currency === 'CLP') {
        usd_amount = CLP_to_USD(amount);
        return (
            <span>
                <span style={{ color: 'black' }}>{amount} CLP</span>
                <span style={{ color: 'gray' }}> ({usd_amount} USD)</span>
            </span>
        );
    } else {
        clp_amount = USD_to_CLP(amount);
        return (
            <span>
                <span style={{ color: 'black' }}>{clp_amount} CLP</span>
                <span style={{ color: 'gray' }}> ({amount} USD)</span>
            </span>
        );
    }
}

function FacturasComponent({ facturas }) {
    return (
        <FormControl>
            <FormLabel
                id="demo-radio-buttons-group-label"
                align='center'
                style={{ color: 'black', fontWeight: 'bold' }}
            >Seleccione una factura</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
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