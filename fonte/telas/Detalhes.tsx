import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { PRODUTOS, Cafe } from "../dados/cafes";
import { TEMA } from "../estilos/tema";
import { SafeAreaView } from "react-native-safe-area-context";
import { BotaoIcone } from "../componentes/BotaoIcone";
import { CarrinhoBotao } from "../componentes/CarrinhoBotao";
import Formatador from "../utilitarios/MoedaFormatador";
import XicaraCafe from "../assets/XicaraCafe.png";
import { Selecionar } from "../componentes/Selecionar";
import { EntradaNumero } from "../componentes/EntradaNumero";
import { Botao } from "../componentes/Botao";

const LISTA_CAFE = PRODUTOS.reduce((lista, dados) => {
	lista.push(...dados.data);
	return lista;
}, [] as Cafe[]);

type RotaParamsProps = {
	produtoId: string;
};

export function Detalhes() {
	const [produto, defProduto] = useState<Cafe>({} as Cafe);
	const rota = useRoute();
	const navegacao = useNavigation();

	const { produtoId } = rota.params as RotaParamsProps;

	function lidarVoltar() {
		if (navegacao.canGoBack()) {
			navegacao.goBack();
		} else {
			navegacao.navigate("inicio");
		}
	}

	useEffect(() => {
		defProduto(LISTA_CAFE.find((cafe) => cafe.id == produtoId) || ({} as Cafe));
	}, [produtoId]);

	return (
		<SafeAreaView style={estilos.conteiner}>
			<ScrollView>
				<View style={estilos.cabecalho}>
					<BotaoIcone icone="arrow-left" onPress={() => lidarVoltar()} />
					<CarrinhoBotao itens={3} />
				</View>
				<View style={estilos.produto}>
					<View style={estilos.produtoCabecalho}>
						<View style={estilos.produtoCabecalhoDentro}>
							<Text style={estilos.marca}>{produto.marca}</Text>
							<Text style={estilos.titulo}>{produto.titulo}</Text>
						</View>
						<Text style={estilos.preco}>
							<Text style={estilos.precoAbreviacao}>R$</Text> {Formatador(produto.preco)}
						</Text>
					</View>
					<Text style={estilos.descricao}>{produto.descricao}</Text>
					<Image
						style={estilos.imagem}
						resizeMode="contain"
						source={XicaraCafe}
						alt="Xícara de café"
					/>
				</View>
				<View style={estilos.rodape}>
					<Text style={estilos.propriedade}>Selecione o tamanho:</Text>
					<View style={estilos.tamanhos}>
						<Selecionar>114ml</Selecionar>
						<Selecionar>140ml</Selecionar>
						<Selecionar>227ml</Selecionar>
					</View>

					<View style={estilos.botoes}>
						<EntradaNumero />
						<Botao tipo="primario">Adicionar</Botao>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		backgroundColor: TEMA.CORES.CINZA_900,
	},
	cabecalho: {
		paddingHorizontal: 32,
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	produto: {
		paddingHorizontal: 32,
		alignItems: "flex-start",
	},
	produtoCabecalho: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	produtoCabecalhoDentro: {
		flex: 1,
		alignItems: "flex-start",
	},
	marca: {
		width: "auto",
		paddingVertical: 6,
		paddingHorizontal: 12,
		textTransform: "uppercase",
		borderRadius: 100,
		color: TEMA.CORES.BRANCO,
		backgroundColor: TEMA.CORES.CINZA_800,
		fontSize: 10,
		fontFamily: TEMA.FONTES.TEXTO_NEGRITO,
		marginBottom: 12,
	},
	titulo: {
		fontSize: 24,
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		color: TEMA.CORES.BRANCO,
	},
	preco: {
		color: TEMA.CORES.AMARELO,
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		fontSize: 36,
	},
	precoAbreviacao: {
		fontSize: 14,
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
	},
	descricao: {
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
		fontSize: 16,
		color: TEMA.CORES.CINZA_500,
	},
	imagem: {
		width: 295,
		height: 260,
		marginHorizontal: 8,
		marginTop: 108,
		marginBottom: -50,
		zIndex: 1,
	},
	rodape: {
		paddingTop: 42,
		paddingHorizontal: 32,
		paddingBottom: 32,
		backgroundColor: TEMA.CORES.BRANCO,
	},
	propriedade: {
		color: TEMA.CORES.CINZA_600,
	},
	tamanhos: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginTop: 8,
	},
	botoes: {
		padding: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		columnGap: 16,
		backgroundColor: TEMA.CORES.CINZA_300,
		marginTop: 20,
		borderRadius: 6,
	},
});
