
export type CartItemType = {
    id: number;
    Category: string;
    description: string;
    image: string;
    price: number;
    title: string; 
    amount: number;

}
export const getProducts = async (): Promise<CartItemType[]> => {
    return await (await fetch('https://fakestoreapi.com/products')).json()
}