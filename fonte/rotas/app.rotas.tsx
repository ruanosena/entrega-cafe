import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "../telas/Inicio";
import { Detalhes } from "../telas/Detalhes";

const { Navigator: Navegador, Screen: Tela } = createNativeStackNavigator();

export function AppRotas() {
	return (
		<Navegador screenOptions={{ headerShown: false }}>
			<Tela name="inicio" component={Inicio} />
			<Tela name="detalhes" component={Detalhes} />
		</Navegador>
	);
}
