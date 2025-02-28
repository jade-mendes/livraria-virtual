export function formatPrice(price: number | undefined) : string {
    // Completa as duas casas decimais depois do ponto e troca ele por vírgula
    if (!price) return '';

    let formatedPrice : string = '';
    let n = price.toFixed(2);
    let f = n.toString();
    formatedPrice = f.replace('.', ',');

    return formatedPrice;
}