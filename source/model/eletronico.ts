import { Produto } from "./produto";

export class Eletronico extends Produto {
    private voltagem: number;
    private consumo: number;
    private garantia: number;

    constructor(nome: string, preco: number, quantidadeEstoque: number, voltagem: number, consumo: number, garantia: number) {
        super(nome, preco, quantidadeEstoque);
        this.voltagem = voltagem;
        this.consumo = consumo;
        this.garantia = garantia;
    }

    // Getter e Setter para voltagem
    public getVoltagem(): number {
        return this.voltagem;
    }

    public setVoltagem(voltagem: number): void {
        this.voltagem = voltagem;
    }

    // Getter e Setter para consumo
    public getConsumo(): number {
        return this.consumo;
    }

    public setConsumo(consumo: number): void {
        this.consumo = consumo;
    }

    // Getter e Setter para garantia
    public getGarantia(): number {
        return this.garantia;
    }

    public setGarantia(garantia: number): void {
        this.garantia = garantia;
    }

    /**
    * Verifica se o eletrônico possui garantia válida.
    *  
    * - Retorna `true` se o valor da garantia for maior que zero.
    * - Retorna `false` caso contrário.
    * 
    * @returns boolean - Indica se o eletrônico possui garantia.
    */
    public possuiGarantia(): boolean {
        return this.garantia > 0;
    }

    /**
    * Sobrescreve o método `exibirDetalhes` da classe base para adicionar informações específicas do eletrônico.
    * 
    * - Exibe os detalhes básicos do produto (nome, preço, estoque) usando o método da classe pai.
    * - Adiciona as informações específicas do eletrônico:
    *   - Voltagem.
    *   - Consumo.
    *   - Garantia.
    * 
    * @returns void
    */
    public exibirDetalhes(): void {
        super.exibirDetalhes();  // Chama o método da classe base Produto
        alert(`Voltagem: ${this.voltagem}V` + 
              `Consumo: ${this.consumo}W` + 
              `Garantia: ${this.garantia} anos`);
    }
}
