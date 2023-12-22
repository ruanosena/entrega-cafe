import { Image, StyleSheet, Text, View } from "react-native";
import { TEMA } from "../estilos/tema";

import cafeImagem from "../assets/Irlandês.png";
import { EntradaNumero } from "./EntradaNumero";
import { BotaoIcone } from "./BotaoIcone";
import { CarrinhoProps } from "../contextos/CarrinhoContexto";
import Formatador from "../utilitarios/MoedaFormatador";

type Props = {
	dados: CarrinhoProps;
};

export function CartaoCarrinho({ dados }: Props) {
	return (
		<View style={estilos.conteiner}>
			<Image style={estilos.imagem} source={dados.imagem} alt={dados.titulo} />
			<View style={estilos.conteudo}>
				<Text style={estilos.nome}>{dados.titulo}</Text>
				<Text style={estilos.detalhes}>227ml</Text>
				<View style={estilos.botoes}>
					<EntradaNumero />
					<BotaoIcone icone="trash-can-outline" tipo="primario" />
				</View>
			</View>
			<Text style={estilos.preco}>R$ {Formatador(dados.preco)}</Text>
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		backgroundColor: TEMA.CORES.CINZA_100,
		paddingVertical: 16,
		paddingHorizontal: 32,
		flexDirection: "row",
		alignItems: "center",
	},
	imagem: {
		width: 64,
		height: 64,
	},
	conteudo: {
		marginLeft: 20,
		marginRight: 10,
	},
	detalhes: {
		color: TEMA.CORES.CINZA_600,
	},
	nome: {
		color: TEMA.CORES.CINZA_900,
		fontSize: 16,
	},
	botoes: {
		marginTop: 8,
		flexDirection: "row",
		alignItems: "center",
		columnGap: 8,
	},
	preco: {
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		fontSize: 16,
		alignSelf: "flex-start",
	},
});
