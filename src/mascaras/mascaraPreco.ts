export const priceFormate = (price: number) => {
        return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    };