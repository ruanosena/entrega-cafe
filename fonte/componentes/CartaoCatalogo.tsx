import { Image, StyleSheet, Text, View } from "react-native";
import { TEMA } from "../estilos/tema";

import cafeImagem from "../assets/Expresso.png";

export function CartaoCatalogo() {
	return (
		<View style={estilos.conteiner}>
			<Image style={estilos.imagem} source={cafeImagem} alt="Café expresso" />
			<View style={estilos.conteudo}>
				<Text style={estilos.titulo}>Expresso tradicional</Text>
				<Text style={estilos.texto}>O tradicional café feito com água quente e grãos moídos</Text>
				<Text style={estilos.preco}>
					<Text style={estilos.precoAbreviacao}>R$</Text> 9,90
				</Text>
			</View>
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		width: 312,
		flexDirection: "row",
		padding: 16,
		paddingLeft: 8,
		borderTopRightRadius: 36,
		borderBottomRightRadius: 6,
		borderBottomLeftRadius: 36,
		borderTopLeftRadius: 6,
		backgroundColor: TEMA.CORES.CINZA_200,
	},
	imagem: {
		width: 96,
		height: 96,
		marginTop: -16 + -16,
	},
	conteudo: {
		marginLeft: 12,
		flex: 1,
	},
	titulo: {
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		fontSize: 16,
		marginBottom: 4,
	},
	texto: {
		color: TEMA.CORES.CINZA_600,
		fontSize: 12,
		marginBottom: 8,
	},
	preco: {
		color: TEMA.CORES.AMARELO_ESCURO,
		fontSize: 20,
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
	},
	precoAbreviacao: {
		fontSize: 14,
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
	},
});
