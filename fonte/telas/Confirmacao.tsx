import { Image, StyleSheet, Text, View } from "react-native";
import EntregaImagem from "../assets/Entrega.png";
import { TEMA } from "../estilos/tema";
import { Botao } from "../componentes/Botao";
import { useNavigation } from "@react-navigation/native";

export function Confirmacao() {
	const navegacao = useNavigation();

	function lidarInicio() {
		navegacao.navigate("inicio");
	}

	return (
		<View style={estilos.conteiner}>
			<Image source={EntregaImagem} alt="Pedido sendo transportado" />
			<Text style={estilos.titulo}>Uhu! Pedido confirmado</Text>
			<Text style={estilos.texto}>Agora é só aguardar que logo o café chegará até você!</Text>
			<Botao tipo="primario" onPress={lidarInicio}>
				Ir para o início
			</Botao>
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		flex: 1,
		backgroundColor: TEMA.CORES.CINZA_100,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 48,
	},
	titulo: {
		color: TEMA.CORES.AMARELO_ESCURO,
		textAlign: "center",
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		fontSize: 24,
		marginTop: 40,
	},
	texto: {
		textAlign: "center",
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
		fontSize: 14,
		color: TEMA.CORES.CINZA_800,
		marginBottom: 64,
	},
});
