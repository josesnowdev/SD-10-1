export function costCalculator(monto) {
    const montoNum = Number(monto);
    const interes = montoNum * 0.01;
    const tarifa = 3;
    return montoNum + interes + tarifa;
}
