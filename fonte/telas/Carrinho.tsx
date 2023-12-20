import { ScrollView, View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TEMA } from "../estilos/tema";
import { BotaoIcone } from "../componentes/BotaoIcone";
import { useNavigation } from "@react-navigation/native";
import { CartaoCarrinho } from "../componentes/CartaoCarrinho";
import { Botao } from "../componentes/Botao";

export function Carrinho() {
	const navegacao = useNavigation();

	function lidarVoltar() {
		if (navegacao.canGoBack()) {
			navegacao.goBack();
		} else {
			navegacao.navigate("inicio");
		}
	}

	function lidarConfirmarPedido() {
		navegacao.navigate("confirmacao");
	}

	return (
		<SafeAreaView style={estilos.conteiner}>
			<ScrollView style={{ flex: 1 }}>
				<View style={estilos.cabecalho}>
					<BotaoIcone tipo="primario" icone="arrow-left" onPress={() => lidarVoltar()} />
					<Text style={estilos.cabecalhoTitulo}>Carrinho</Text>
				</View>
				<View style={estilos.conteudo}>
					<CartaoCarrinho />
					<CartaoCarrinho />
				</View>
				<View style={estilos.rodape}>
					<View style={estilos.valorTotal}>
						<Text style={estilos.valorTexto}>Valor total</Text>
						<Text style={estilos.valor}>R$ 9,90</Text>
					</View>
					<Botao tipo="secundario" onPress={lidarConfirmarPedido}>
						Confirmar Pedido
					</Botao>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		backgroundColor: TEMA.CORES.CINZA_100,
		flex: 1,
	},
	cabecalho: {
		paddingHorizontal: 32,
		paddingVertical: 26,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cabecalhoTitulo: {
		flex: 1,
		textAlign: "center",
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		fontSize: 16,
	},
	conteudo: {
		paddingHorizontal: 32,
		flex: 1,
	},
	rodape: {
		// position: "absolute",
		// bottom: 0,
		// left: 0,
		width: "100%",
		paddingHorizontal: 32,
		backgroundColor: TEMA.CORES.BRANCO,
		rowGap: 20,
		paddingTop: 28,
		// paddingBottom: 40,
	},
	valorTotal: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	valorTexto: {
		fontSize: 16,
		color: TEMA.CORES.CINZA_800,
	},
	valor: {
		color: TEMA.CORES.CINZA_800,
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		fontSize: 20,
	},
});
