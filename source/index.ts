import { Produto } from "./model/produto";
import { Carrinho } from "./model/carrinho";
import { Cliente } from "./model/cliente";
import { Eletronico } from "./model/eletronico";
import { Roupa } from "./model/roupa";

// Criando produtos
let celular = new Eletronico("Celular XYZ", 1500.00, 50, 220, 30, 2);
let camisa = new Roupa("Camisa Polo", 80.00, 100, "M", "Azul", "Algodão");

// Criando um carrinho de compras
let carrinho = new Carrinho();

// Adicionando produtos ao carrinho
carrinho.adicionarProduto(celular, 2); // Adiciona 2 unidades do celular
carrinho.adicionarProduto(camisa, 3);  // Adiciona 3 unidades da camisa

// Criando um cliente
let cliente = new Cliente("123.456.789-00", "João Silva", "(11) 98765-4321");

// Realizando o pedido
cliente.fazerPedido("2024-12-11", carrinho);

// Exibindo os detalhes do cliente e seus pedidos
cliente.exibirDetalhes();
