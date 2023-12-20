import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "../telas/Inicio";
import { Detalhes } from "../telas/Detalhes";
import { Carrinho } from "../telas/Carrinho";
import { Confirmacao } from "../telas/Confirmacao";

const { Navigator: Navegador, Screen: Tela } = createNativeStackNavigator();

export function AppRotas() {
	return (
		<Navegador screenOptions={{ headerShown: false }}>
			<Tela name="inicio" component={Inicio} />
			<Tela name="detalhes" component={Detalhes} />
			<Tela name="carrinho" component={Carrinho} />
			<Tela name="confirmacao" component={Confirmacao} />
		</Navegador>
	);
}
