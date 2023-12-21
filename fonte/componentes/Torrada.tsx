import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, { SlideInUp, SlideOutUp } from "react-native-reanimated";
import { TEMA } from "../estilos/tema";

type Props = {
	children?: ReactNode;
};

export function Torrada({ children }: Props) {
	return (
		<Animated.View style={estilos.conteiner} entering={SlideInUp} exiting={SlideOutUp}>
			<Text style={estilos.texto}>{children}</Text>
		</Animated.View>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		position: "absolute",
		top: 24,
		zIndex: 10,
		width: "100%",
		paddingHorizontal: 32,
		paddingVertical: 16,
		backgroundColor: TEMA.CORES.CINZA_700,
	},
	texto: {
		color: TEMA.CORES.CINZA_100,
		fontSize: 14,
		fontFamily: TEMA.FONTES.TEXTO_NEGRITO,
	},
});
