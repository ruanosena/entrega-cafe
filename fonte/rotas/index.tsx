import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { TEMA } from "../estilos/tema";
import { AppRotas } from "./app.rotas";

export function Rotas() {
	const tema = DefaultTheme;
	tema.colors.background = TEMA.CORES.CINZA_900;

	return (
		<NavigationContainer theme={tema}>
			<AppRotas />
		</NavigationContainer>
	);
}
