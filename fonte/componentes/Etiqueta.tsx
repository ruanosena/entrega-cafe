import { ReactNode, useEffect, useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { TEMA } from "../estilos/tema";

type Props = PressableProps & {
	aoSelecionar?: (selecionado: boolean) => void;
	children?: ReactNode;
};

export function Etiqueta({ aoSelecionar, children, ...rest }: Props) {
	const [selecionado, defSelecionado] = useState(false);

	useEffect(() => {
		aoSelecionar && aoSelecionar(selecionado);
	}, [selecionado]);

	return (
		<Pressable
			onPress={() => {
				defSelecionado(!selecionado);
			}}
			style={[estilos.conteiner, selecionado && estilos.conteinerSelecionado]}
			{...rest}
		>
			<Text style={[estilos.texto, selecionado && estilos.textoSelecionado]}>{children}</Text>
		</Pressable>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		borderRadius: 100,
		paddingVertical: 6,
		paddingHorizontal: 12,
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: TEMA.CORES.ROXO,
	},
	conteinerSelecionado: {
		borderWidth: 0,
		backgroundColor: TEMA.CORES.ROXO,
	},
	texto: {
		textTransform: "uppercase",
		fontFamily: TEMA.FONTES.TEXTO_NEGRITO,
		color: TEMA.CORES.ROXO_ESCURO,
	},
	textoSelecionado: {
		color: TEMA.CORES.BRANCO,
	},
});
