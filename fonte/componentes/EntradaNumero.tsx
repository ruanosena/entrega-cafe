import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { BotaoIcone } from "./BotaoIcone";
import { useState } from "react";
import { TEMA } from "../estilos/tema";

export function EntradaNumero({ ...rest }: TextInputProps) {
	const [valor, defValor] = useState(0);

	return (
		<View style={estilos.conteiner}>
			<BotaoIcone
				icone="minus"
				tipo="primario"
				onPress={() => (valor == 0 ? null : defValor(valor - 1))}
			/>
			<TextInput
				style={estilos.entrada}
				keyboardType="number-pad"
				value={valor.toString()}
				onChangeText={(texto) => defValor(Number(texto))}
				{...rest}
			/>
			<BotaoIcone icone="plus" tipo="primario" onPress={() => defValor(valor + 1)} />
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: TEMA.CORES.CINZA_400,
	},
	entrada: {
		width: "auto",
		textAlign: "center",
	},
});
