import { Carrinho } from "./carrinho";
import { Pedido } from "./pedido";

export class Cliente {
    private cpf: string;
    private nome: string;
    private telefone: string;
    private pedidos: Pedido[];
    
    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.pedidos = [];
    }

    // Getter e Setter para id
    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    // Getter e Setter para nome
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Getter e Setter para telefone
    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    // Getter e Setter para pedidos
    public getPedidos(): Pedido[] {
        return this.pedidos;
    }

    public setPedidos(pedido: Pedido): void {
        this.pedidos.push(pedido);
    }

    /**
    * Realiza o pedido, transformando o carrinho em um pedido.
    * @returns Pedido - O pedido gerado a partir do carrinho.
    */
    public fazerPedido(data: string, carrinho: Carrinho): Pedido {
        // Verifica se o carrinho possui itens válidos
        if (!carrinho || carrinho.getItens().length === 0) {
            alert("O carrinho está vazio ou inválido.");
        }
        // Cria um novo pedido com a data fornecida
        let pedido: Pedido = new Pedido(data, carrinho);

        this.setPedidos(pedido);
        carrinho.limparCarrinho();
        return pedido;
    }

    /**
    * Exibe os detalhes do cliente, incluindo seus pedidos.
    * 
    * - Exibe o ID, nome e telefone do cliente.
    * - Exibe a lista de pedidos realizados, com o ID e status de cada um.
    * 
    * @returns void
    */  
    public exibirDetalhes(): void {
        alert(`CPF do Cliente: ${this.getCpf()}\n` 
            + `Nome do Cliente: ${this.getNome()}\n` 
            + `Telefone do Cliente: ${this.getTelefone()}\n`
            + "Pedidos realizados:");

        if (this.pedidos.length > 0) {
            for (let i = 0; i < this.pedidos.length; i++) {
                let pedido = this.pedidos[i];
                alert(`Pedido ${i + 1}:\n` + `Status: ${pedido.getStatus()}\n - Valor Total: R$${pedido.getValorTotal().toFixed(2)}`);
            }
        } else {
            alert("Este cliente não realizou nenhum pedido.");
        }
    }
}
