import { Image, StyleSheet, Text, View } from "react-native";
import { TEMA } from "../estilos/tema";

import CafeImagem from "../assets/Irlandês.png";

type Props = {
	tamanho?: "pequeno" | "grande";
};

export function CartaoDestaque({ tamanho = "pequeno" }: Props) {
	return (
		<View style={[estilos.conteiner, tamanho == "grande" && estilos.conteinerGrande]}>
			<Image
				source={CafeImagem}
				style={[estilos.imagem, tamanho == "grande" && estilos.imagemGrande]}
				resizeMode="contain"
			/>
			<Text style={[estilos.marca, tamanho == "grande" && estilos.marcaGrande]}>Especial</Text>
			<Text style={[estilos.titulo, tamanho == "grande" && estilos.tituloGrande]}>Irlandês</Text>
			<Text style={[estilos.descricao, tamanho == "grande" && estilos.descricaoGrande]}>
				Bebida a base de café, uísque irlandês, açúcar e chantilly
			</Text>
			<Text style={[estilos.preco, tamanho == "grande" && estilos.precoGrande]}>
				<Text
					style={[estilos.precoAbreviacao, tamanho == "grande" && estilos.precoAbreviacaoGrande]}
				>
					R$
				</Text>{" "}
				9,90
			</Text>
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		width: 142,
		padding: 16,
		backgroundColor: TEMA.CORES.CINZA_200,
		borderWidth: 1,
		borderColor: TEMA.CORES.CINZA_300,
		paddingHorizontal: 12,
		borderTopRightRadius: 28,
		borderTopLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 28,
		alignItems: "center",
	},
	conteinerGrande: {
		width: 176,
		padding: 20,
		borderTopRightRadius: 28,
		borderTopLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 28,
	},
	imagem: {
		width: 64,
		height: 64,
		marginTop: -10 + -16,
		marginBottom: 5,
	},
	imagemGrande: {
		width: 120,
		height: 120,
		marginTop: -32 + -20,
		marginBottom: 8,
	},
	marca: {
		textTransform: "uppercase",
		color: TEMA.CORES.ROXO,
		fontFamily: TEMA.FONTES.TEXTO_NEGRITO,
		paddingVertical: 3,
		paddingHorizontal: 6,
		backgroundColor: TEMA.CORES.ROXO_CLARO,
		borderRadius: 80,
		fontSize: 8,
		marginVertical: 15,
	},
	marcaGrande: {
		fontSize: 10,
	},
	titulo: {
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		textAlign: "center",
		marginBottom: 4,
	},
	tituloGrande: { fontSize: 20 },
	descricao: {
		color: TEMA.CORES.CINZA_600,
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
		fontSize: 10,
		textAlign: "center",
		marginBottom: 12,
	},
	descricaoGrande: { fontSize: 12 },
	preco: {
		color: TEMA.CORES.AMARELO_ESCURO,
		fontSize: 20,
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
	},
	precoGrande: {
		fontSize: 24,
	},
	precoAbreviacao: {
		fontSize: 10,
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
	},
	precoAbreviacaoGrande: {
		fontSize: 12,
	},
});
