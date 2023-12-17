import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { TEMA } from "../estilos/tema";

type Props = TouchableOpacityProps & {
	tipo?: "primario" | "secundario";
	children?: ReactNode;
};

export function Botao({ tipo = "primario", children, ...rest }: Props) {
	return (
		<TouchableOpacity
			style={[
				estilos.botao,
				{
					backgroundColor: tipo == "primario" ? TEMA.CORES.ROXO_ESCURO : TEMA.CORES.AMARELO_ESCURO,
				},
			]}
			activeOpacity={0.75}
			{...rest}
		>
			<Text style={estilos.botaoTexto}>{children}</Text>
		</TouchableOpacity>
	);
}

const estilos = StyleSheet.create({
	botao: {
		padding: 12,
		borderRadius: 6,
	},
	botaoTexto: {
		textTransform: "uppercase",
		textAlign: "center",
		color: TEMA.CORES.BRANCO,
		fontFamily: TEMA.FONTES.TEXTO_NEGRITO,
	},
});
