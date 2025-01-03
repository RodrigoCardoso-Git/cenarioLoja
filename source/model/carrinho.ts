import { Produto } from "./produto";
import { ItemPedido } from "./itemPedido";

export class Carrinho {
    private itens: ItemPedido[];
    private valorTotal: number;

    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }
    
    // Getter e Setter para itens
    public getItens(): ItemPedido[] {
        return this.itens;
    }

    public setItens(itens: ItemPedido[]): void {
        this.itens = itens;
        this.calcularValorTotal();
    }

    // Getter para valor total
    public getValorTotal(): number {
        return this.valorTotal;
    }

    private setValorTotal(valor: number): void{
        this.valorTotal = valor;
    }

    /**
    * Calcula o valor total do carrinho com base nos itens.
    */
    public calcularValorTotal(): void {
        let total = 0;
    
        // Itera sobre os itens e soma os subtotais
        for (let i = 0; i < this.itens.length; i++) {
            total += this.itens[i].getSubtotal(); 
        }
        // Atribui o total calculado à variável valorTotal
        this.setValorTotal(total);  
    }

    /**
    * Adiciona um produto ao carrinho.
    * - Se o produto já existir no carrinho, atualiza a quantidade.
    * - Caso contrário, adiciona um novo ItemPedido ao carrinho.
    * @param produto - Produto a ser adicionado.
    * @param quantidade - Quantidade a ser adicionada.
    */
    public adicionarProduto(produto: Produto, quantidade: number): void {
        if (quantidade <= 0) {
            alert("A quantidade deve ser maior que 0.");
            return;
        }

        let itemExistente: ItemPedido | null = null;

        // percorre a lista de itens
        for (let i = 0; i < this.itens.length; i++) {
            // Verifica se é o mesmo produto pelo nome
            if (this.itens[i].getProduto().getNome() === produto.getNome()) {
                itemExistente = this.itens[i];
                break;  
            }
        }
        if (itemExistente) {
            itemExistente.setQuantidade(itemExistente.getQuantidade() + quantidade);
            alert("Quantidade do item foi aumentada");
        } else {
            this.itens.push(new ItemPedido(produto, quantidade));
            alert("Novo item adicionado no carrinho");
        }

        this.calcularValorTotal();
    }

    /**
    * Remove um produto do carrinho.
    * @param produto - Produto a ser removido.
    */
    public removerProduto(produto: Produto): void {
        let itens: ItemPedido[] = this.getItens();
    
        // percorre a lista de itens
        for (let i = 0; i < this.itens.length; i++) {
            // Verifica se é o mesmo produto pelo nome
            if (this.itens[i].getProduto().getNome() === produto.getNome()) {
                itens.splice(i, 1);
                this.setItens(itens);
                break; 
            }
        }
        this.calcularValorTotal();
    }

    /**
    * Limpa o carrinho.
    */
    public limparCarrinho(): void {
        this.setItens([]);
        this.setValorTotal(0);
    }

    
}
