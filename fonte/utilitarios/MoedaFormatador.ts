const formatador = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

export default function Formatador(valor: number) {
	let valorLocal = formatador.format(valor / 100);
	return valorLocal.split(/\s/).pop();
}
