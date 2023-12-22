import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { BotaoIcone } from "./BotaoIcone";
import { useState } from "react";
import { TEMA } from "../estilos/tema";

type EntradaNumeroProps = TextInputProps & {
	aoMudarValor?: (valor: number) => void;
};

export function EntradaNumero({ aoMudarValor, ...rest }: EntradaNumeroProps) {
	const [valor, defValor] = useState(0);

	return (
		<View style={estilos.conteiner}>
			<BotaoIcone
				icone="minus"
				tipo="primario"
				onPress={() => {
					aoMudarValor && aoMudarValor(valor - 1);
					valor == 0 ? null : defValor(valor - 1);
				}}
			/>
			<TextInput
				style={estilos.entrada}
				keyboardType="number-pad"
				value={valor.toString()}
				onChangeText={(texto) => {
					aoMudarValor && aoMudarValor(Number(texto));
					defValor(Number(texto));
				}}
				{...rest}
			/>
			<BotaoIcone
				icone="plus"
				tipo="primario"
				onPress={() => {
					aoMudarValor && aoMudarValor(valor + 1);
					defValor(valor + 1);
				}}
			/>
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
