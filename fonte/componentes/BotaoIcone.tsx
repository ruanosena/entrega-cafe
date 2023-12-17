import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TEMA } from "../estilos/tema";

type Props = TouchableOpacityProps & {
	tipo?: "primario" | "secundario";
	transparente?: boolean;
	icone?: keyof typeof MaterialCommunityIcons.glyphMap;
	children?: ReactNode;
};

export function BotaoIcone({ tipo = "primario", transparente = false, icone, children, ...rest }: Props) {
	return (
		<TouchableOpacity
			style={[
				estilos.botao,
				{
					backgroundColor: transparente ? TEMA.CORES.ROXO_CLARO : "transparent",
				},
			]}
			activeOpacity={0.75}
			{...rest}
		>
			{children ? (
				children
			) : (
				<MaterialCommunityIcons
					name={icone}
					size={20}
					color={tipo == "primario" ? TEMA.CORES.ROXO : TEMA.CORES.AMARELO}
				/>
			)}
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
});
