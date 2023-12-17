import { ActivityIndicator, StyleSheet, View } from "react-native";

export function Carregando() {
	return (
		<View style={estilos.conteiner}>
			<ActivityIndicator size={50} />
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
