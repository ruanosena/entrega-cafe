import { Image, StyleSheet, Text, View, ViewProps } from "react-native";
import { TEMA } from "../estilos/tema";

import cafeImagem from "../assets/Expresso.png";
import { Cafe } from "../dados/cafes";
import Formatador from "../utilitarios/MoedaFormatador";

type Props = ViewProps & {
	dados: Cafe;
};

export function CartaoCatalogo({ dados, ...rest }: Props) {
	return (
		<View style={estilos.conteiner} {...rest}>
			<Image style={estilos.imagem} source={dados.imagem} alt="Foto do café na xícara" />
			<View style={estilos.conteudo}>
				<Text style={estilos.titulo}>{dados.titulo}</Text>
				<Text style={estilos.texto}>{dados.descricao}</Text>
				<Text style={estilos.preco}>
					<Text style={estilos.precoAbreviacao}>R$</Text> {Formatador(dados.preco)}
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
