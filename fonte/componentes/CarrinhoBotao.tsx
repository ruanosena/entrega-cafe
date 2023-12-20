import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TEMA } from "../estilos/tema";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
	itens?: number;
};

export function CarrinhoBotao({ itens = 0, ...rest }: Props) {
	const navegacao = useNavigation();

	function aoAbrirCarrinho() {
		navegacao.navigate("carrinho");
	}

	return (
		<TouchableOpacity
			style={estilos.botao}
			activeOpacity={0.75}
			onPress={aoAbrirCarrinho}
			{...rest}
		>
			<MaterialCommunityIcons
				name={"cart"}
				size={20}
				color={itens ? TEMA.CORES.ROXO : TEMA.CORES.AMARELO}
			/>
			{!!itens && <Text style={estilos.distintivo}>{itens}</Text>}
		</TouchableOpacity>
	);
}

const estilos = StyleSheet.create({
	botao: {
		padding: 8,
		borderRadius: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	distintivo: {
		position: "absolute",
		top: -10,
		right: -10,
		width: 24,
		height: 24,
		fontSize: 14,
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
		color: TEMA.CORES.BRANCO,
		backgroundColor: TEMA.CORES.ROXO,
		borderRadius: 100,
		textAlign: "center",
	},
});
