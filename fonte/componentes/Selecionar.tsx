import { ReactNode, useEffect, useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { TEMA } from "../estilos/tema";

type Props = PressableProps & {
	aoSelecionar?: (selecionado: boolean) => void;
	children?: ReactNode;
};

export function Selecionar({ aoSelecionar, children, ...rest }: Props) {
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
		borderRadius: 6,
		padding: 12,
		backgroundColor: TEMA.CORES.CINZA_300,
	},
	conteinerSelecionado: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: TEMA.CORES.ROXO,
	},
	texto: {
		textTransform: "capitalize",
		color: TEMA.CORES.CINZA_700,
		fontFamily: TEMA.FONTES.TEXTO_NORMAL,
	},
	textoSelecionado: {
		color: TEMA.CORES.ROXO,
		fontFamily: TEMA.FONTES.TEXTO_NEGRITO,
	},
});
