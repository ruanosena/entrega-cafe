import { ReactNode, useEffect, useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { TEMA } from "../estilos/tema";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const PressableAnimado = Animated.createAnimatedComponent(Pressable);

type Props = PressableProps & {
	aoSelecionar?: (selecionado: boolean) => void;
	selecionadoPadrao?: boolean;
	deveMudar?: boolean;
	children?: ReactNode;
};

export function Etiqueta({
	selecionadoPadrao = false,
	deveMudar = true,
	aoSelecionar,
	children,
	...rest
}: Props) {
	const [selecionado, defSelecionado] = useState(selecionadoPadrao);
	const scale = useSharedValue(1);

	const conteinerAnimadoEstilo = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	function onPressIn() {
		scale.value = 1.15;
	}
	function onPressOut() {
		scale.value = 1;
	}

	useEffect(() => {
		aoSelecionar && aoSelecionar(selecionado);
	}, [selecionado]);

	return (
		<PressableAnimado
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			onPress={() => {
				if (deveMudar) defSelecionado(!selecionado);
			}}
			style={[
				estilos.conteiner,
				selecionado && estilos.conteinerSelecionado,
				conteinerAnimadoEstilo,
			]}
			{...rest}
		>
			<Text style={[estilos.texto, selecionado && estilos.textoSelecionado]}>{children}</Text>
		</PressableAnimado>
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
