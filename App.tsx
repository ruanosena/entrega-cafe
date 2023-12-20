import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Carregando } from "./fonte/componentes/Carregando";
import { Rotas } from "./fonte/rotas";

export default function App() {
	const [fontesCarregadas] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });

	if (!fontesCarregadas) return <Carregando />;
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			<Rotas />
		</>
	);
}
