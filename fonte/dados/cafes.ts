export type Cafe = { id: string; titulo: string; descricao: string; preco: number; imagem: any };
type CafesLista = { title: string; data: Cafe[] }[];

export const CAFES: CafesLista = [
	{
		title: "Tradicionais",
		data: [
			{
				id: "1",
				titulo: "Expresso Tradicional",
				descricao: "O tradicional café feito com água quente e grãos moídos",
				preco: 990,
				imagem: require("../assets/Expresso.png"),
			},
			{
				id: "2",
				titulo: "Expresso Americano",
				descricao: "Expresso diluído, menos intenso que o tradicional",
				preco: 990,
				imagem: require("../assets/Americano.png"),
			},
			{
				id: "3",
				titulo: "Expresso Cremoso",
				descricao: "Café expresso tradicional com espuma cremosa",
				preco: 990,
				imagem: require("../assets/ExpressoCremoso.png"),
			},
		],
	},
	{
		title: "Doces",
		data: [
			{
				id: "6",
				titulo: "Capuccino",
				descricao: "Bebida com canela feita de doses de café, leite e espuma",
				preco: 990,
				imagem: require("../assets/Capuccino.png"),
			},
			{
				id: "7",
				titulo: "Mocaccino",
				descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
				preco: 990,
				imagem: require("../assets/Mochaccino.png"),
			},
		],
	},
	{
		title: "Especiais",
		data: [
			{
				id: "9",
				titulo: "Cubano",
				descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
				preco: 990,
				imagem: require("../assets/Cubano.png"),
			},
			{
				id: "10",
				titulo: "Havaiano",
				descricao: "Bebida adocicada preparada com café e leite de coco",
				preco: 990,
				imagem: require("../assets/Havaiano.png"),
			},
			{
				id: "11",
				titulo: "Árabe",
				descricao: "Bebida preparada com grãos de café árabe e especiarias",
				preco: 990,
				imagem: require("../assets/Árabe.png"),
			},
		],
	},
];
