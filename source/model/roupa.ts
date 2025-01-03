import { Produto } from "./produto";

export class Roupa extends Produto {
    private tamanho: string;
    private cor: string;
    private material: string;

    constructor(nome: string, preco: number, quantidadeEstoque: number, tamanho: string, cor: string, material: string) {
        super(nome, preco, quantidadeEstoque);
        this.tamanho = tamanho;
        this.cor = cor;
        this.material = material;
    }

    // Getter e Setter para o tamanho
    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(tamanho: string): void {
        this.tamanho = tamanho;
    }

    // Getter e Setter para a cor
    public getCor(): string {
        return this.cor;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    // Getter e Setter para o material
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    /**
    * Exibe sugestões de uso para diferentes tipos de materiais de roupas.
    * 
    * - Mostra recomendações específicas para materiais como algodão, lã e poliéster.
    * - Apresenta as condições ideais em que cada material é mais adequado.
    * 
    * @returns void
    */
    public sugestaoMaterial(): void {
        alert("Materiais e quando você deve usá-lo:\n" + 
            "Algodão: Ideal para climas quentes e atividades ao ar livre.\n" +
            "Lã: Perfeito para o inverno e climas frios.\n" +
            "Poliéster: Resistente e ótimo para o uso diário, fácil de cuidar.");
    }

    /**
    * Sobrescreve o método `exibirDetalhes` para incluir informações adicionais.
    * 
    * - Além dos detalhes do produto base (fornecidos pela classe pai), exibe:
    *   - Tamanho do produto.
    *   - Cor do produto.
    *   - Material do produto.
    * 
    * @returns void
    */
    public exibirDetalhes(): void {
        super.exibirDetalhes(); 
        alert(`Tamanho: ${this.tamanho} Cor: ${this.cor} Material: ${this.material}`);
    }
}
