function CLP_to_USD(amount) {
    return amount / 800;
}

function USD_to_CLP(amount) {
    return amount * 800;
}

export const transformAmount = (amount, currency) => {
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