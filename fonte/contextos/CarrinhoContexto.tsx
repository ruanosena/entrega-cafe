import { ReactNode, createContext, useState } from "react";
import { Cafe } from "../dados/cafes";

export type CarrinhoProps = Cafe & { quantidade: number };

export type CarrinhoContextoDadosProps = {
	carrinho: CarrinhoProps[];
	addProdutoCarrinho: (produto: CarrinhoProps) => void;
	removerProdutoCarrinho: (produtoId: string) => void;
};

export const CarrinhoContexto = createContext<CarrinhoContextoDadosProps>(
	{} as CarrinhoContextoDadosProps
);

type CarrinhoContextoProviderProps = {
	children: ReactNode;
};

export function CarrinhoContextoProvider({ children }: CarrinhoContextoProviderProps) {
	const [carrinho, defCarrinho] = useState<CarrinhoProps[]>([]);

	function addProdutoCarrinho(novoProduto: CarrinhoProps) {
		const produtoExiste = carrinho.find((produto) => produto.id === novoProduto.id);

		if (produtoExiste) {
			defCarrinho((produtos) =>
				produtos.map((produto) => {
					if (produto.id === novoProduto.id) {
						produto.quantidade = Number(produto.quantidade) + Number(novoProduto.quantidade);
					}

					return produto;
				})
			);
		} else {
			defCarrinho((produtos) => {
				produtos.push(novoProduto);
				return produtos;
			});
		}
	}

	function removerProdutoCarrinho(produtoId: string) {
		defCarrinho((produtos) => produtos.filter((produto) => produto.id != produtoId));
	}

	return (
		<CarrinhoContexto.Provider value={{ carrinho, addProdutoCarrinho, removerProdutoCarrinho }}>
			{children}
		</CarrinhoContexto.Provider>
	);
}
