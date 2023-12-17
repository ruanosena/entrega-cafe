import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { BotaoIcone } from "./BotaoIcone";
import { useState } from "react";

export function EntradaNumero({ ...rest }: TextInputProps) {
	const [valor, defValor] = useState(0);

	return (
		<View style={estilos.conteiner}>
			<BotaoIcone icone="minus" onPress={() => (valor == 0 ? null : defValor(valor - 1))} />
			<TextInput
				style={estilos.entrada}
				keyboardType="number-pad"
				value={valor.toString()}
				onChangeText={(texto) => defValor(Number(texto))}
				{...rest}
			/>
			<BotaoIcone icone="plus" onPress={() => defValor(valor + 1)} />
		</View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		flexDirection: "row",
		alignItems: "center",
	},
	entrada: {
		width: "auto",
		textAlign: "center",
	},
});
