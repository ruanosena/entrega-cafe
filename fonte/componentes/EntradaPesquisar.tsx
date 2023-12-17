import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TEMA } from "../estilos/tema";

export function EntradaPesquisar({ ...rest }: TextInputProps) {
	const [valor, defValor] = useState("");

	return (
		<View style={estilos.conteiner}>
			<MaterialCommunityIcons name="magnify" size={20} color={TEMA.CORES.AMARELO} />
			<TextInput
				style={estilos.entrada}
				value={valor.toString()}
				onChangeText={(texto) => defValor(texto)}
				placeholderTextColor={TEMA.CORES.CINZA_600}
				placeholder="Pesquisar"
				{...rest}
			/>
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 14,
		backgroundColor: TEMA.CORES.CINZA_800,
		borderRadius: 4,
	},
	entrada: {
		color: TEMA.CORES.BRANCO,
		padding: 12,
	},
});
