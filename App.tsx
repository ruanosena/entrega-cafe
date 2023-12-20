import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Botao } from "./fonte/componentes/Botao";
import { BotaoIcone } from "./fonte/componentes/BotaoIcone";
import { CarrinhoBotao } from "./fonte/componentes/CarrinhoBotao";
import { Selecionar } from "./fonte/componentes/Selecionar";
import { Etiqueta } from "./fonte/componentes/Etiqueta";
import { EntradaNumero } from "./fonte/componentes/EntradaNumero";
import { Carregando } from "./fonte/componentes/Carregando";
import { EntradaPesquisar } from "./fonte/componentes/EntradaPesquisar";
import { CartaoDestaque } from "./fonte/componentes/CartaoDestaque";
import { CartaoCatalogo } from "./fonte/componentes/CartaoCatalogo";
import { CartaoCarrinho } from "./fonte/componentes/CartaoCarrinho";

export default function App() {
	const [fontesCarregadas] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });

	if (!fontesCarregadas) return <Carregando />;
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<Botao>Label</Botao>
				<Botao tipo="secundario">Label</Botao>
				<BotaoIcone icone="plus" />
				<BotaoIcone icone="trash-can-outline" />
				<CarrinhoBotao itens={2} />
				<CarrinhoBotao />
				<Selecionar>Label</Selecionar>
				<Etiqueta>Label</Etiqueta>
				<EntradaNumero />
				<EntradaPesquisar />
				<CartaoDestaque tamanho="pequeno" />
				<CartaoDestaque tamanho="grande" />
				<CartaoCatalogo />
				<CartaoCarrinho />
				<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
