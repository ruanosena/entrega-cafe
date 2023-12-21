import { Image, Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { TEMA } from "../estilos/tema";

import CafeImagem from "../assets/Irlandês.png";
import { Cafe } from "../dados/cafes";
import Formatador from "../utilitarios/MoedaFormatador";

type Props = PressableProps & {
	tamanho?: "pequeno" | "grande";
	dados: Cafe;
};

export function CartaoDestaque({ dados, tamanho = "pequeno", ...rest }: Props) {
	return (
		<Pressable
			style={[estilos.conteiner, tamanho == "grande" && estilos.conteinerGrande]}
			{...rest}
		>
			<Image
				source={dados.imagem}
				style={[estilos.imagem, tamanho == "grande" && estilos.imagemGrande]}
				resizeMode="contain"
			/>
			<Text style={[estilos.marca, tamanho == "grande" && estilos.marcaGrande]}>{dados.marca}</Text>
			<Text style={[estilos.titulo, tamanho == "grande" && estilos.tituloGrande]}>
				{dados.titulo}
			</Text>
			<Text style={[estilos.descricao, tamanho == "grande" && estilos.descricaoGrande]}>
				{dados.descricao}
			</Text>
			<Text style={[estilos.preco, tamanho == "grande" && estilos.precoGrande]}>
				<Text
					style={[estilos.precoAbreviacao, tamanho == "grande" && estilos.precoAbreviacaoGrande]}
				>
					R$
				</Text>{" "}
				{Formatador(dados.preco)}
			</Text>
		</Pressable>
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
		overflow: "visible",
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
