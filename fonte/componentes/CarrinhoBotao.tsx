import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TEMA } from "../estilos/tema";

type Props = TouchableOpacityProps & {
	itens?: number;
};

export function CarrinhoBotao({ itens = 0, ...rest }: Props) {
	return (
		<TouchableOpacity style={estilos.botao} activeOpacity={0.75} {...rest}>
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
		width: 20,
		height: 20,
		color: TEMA.CORES.BRANCO,
		backgroundColor: TEMA.CORES.ROXO,
		borderRadius: 100,
		textAlign: "center",
	},
});
