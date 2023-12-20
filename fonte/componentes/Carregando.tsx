import { ActivityIndicator, StyleSheet, View } from "react-native";
import { TEMA } from "../estilos/tema";

export function Carregando() {
	return (
		<View style={estilos.conteiner}>
			<ActivityIndicator size={50} />
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		backgroundColor: TEMA.CORES.CINZA_900,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
