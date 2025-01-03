import { Carrinho } from "./carrinho";
import { ItemPedido } from "./itemPedido";

export class Pedido {
    private data: string;
    private status: string;
    private valorTotal: number;
    private itens: ItemPedido[];

    constructor(date: string, carrinho: Carrinho) {
        this.data = date;
        this.status = "Em processamento";
        this.valorTotal = carrinho.getValorTotal();
        this.itens = [...carrinho.getItens()];
    }
    
    // Gettes e Setter para data
    public getData(): string {
        return this.data;
    }

    public setData(data: string): void {
        this.data = data;
    }

    // Gettes e Setter para status
    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    // Getters e Setters para valorTotal
    public getValorTotal(): number {
        return this.valorTotal;
    }

    public setValorTotal(valor: number): void {
        this.valorTotal = valor;
    }

    // Getters e Setters para itens
    public getItens(): ItemPedido[] {
        return this.itens;
    }

    public setItens(itens: ItemPedido[]): void {
        this.itens = itens;
    }
}

