import { FlatList, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import { BotaoIcone } from "../componentes/BotaoIcone";
import { TEMA } from "../estilos/tema";
import { CarrinhoBotao } from "../componentes/CarrinhoBotao";
import { EntradaPesquisar } from "../componentes/EntradaPesquisar";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartaoDestaque } from "../componentes/CartaoDestaque";
import { Etiqueta } from "../componentes/Etiqueta";
import { CAFES } from "../dados/cafes";
import { CartaoCatalogo } from "../componentes/CartaoCatalogo";

export function Inicio() {
	return (
		<SafeAreaView style={estilos.conteiner}>
			<ScrollView>
				<View style={estilos.cabecalho}>
					<View style={estilos.local}>
						<BotaoIcone icone="map-marker" />
						<Text style={estilos.localTexto}>Porto Alegre, RS</Text>
					</View>
					<CarrinhoBotao />
				</View>
				<View style={estilos.heroi}>
					<Text style={estilos.heroiTexto}>Encontre o café perfeito para qualquer hora do dia</Text>
					<EntradaPesquisar />
				</View>
				<View style={estilos.conteudo}>
					<FlatList
						style={{ overflow: "visible" }}
						contentContainerStyle={estilos.carrosselConteiner}
						horizontal
						showsHorizontalScrollIndicator={false}
						data={[1, 2, 3, 4]}
						keyExtractor={(item) => "café-" + item}
						renderItem={({ item, index }) => (
							<CartaoDestaque tamanho={index > 0 ? "pequeno" : "grande"} />
						)}
					/>
					<View style={estilos.lista}>
						<Text style={estilos.listaTitulo}>Nossos cafés</Text>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={estilos.listaFiltros}
						>
							<Etiqueta>Tradicionais</Etiqueta>
							<Etiqueta>Doces</Etiqueta>
							<Etiqueta>Especiais</Etiqueta>
						</ScrollView>
						{CAFES.map((item) => (
							<View style={estilos.secao} key={item.title.split(" ").join("")}>
								<Text style={estilos.secaoTitulo}>{item.title}</Text>
								{item.data.map((itemDados) => (
									<CartaoCatalogo key={itemDados.id} dados={itemDados} />
								))}
							</View>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const estilos = StyleSheet.create({
	conteiner: {
		backgroundColor: TEMA.CORES.CINZA_900,
	},
	cabecalho: {
		paddingHorizontal: 32,
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	local: {
		alignItems: "center",
		flexDirection: "row",
	},
	localTexto: {
		color: TEMA.CORES.CINZA_100,
	},
	heroi: {
		paddingHorizontal: 32,
		paddingTop: 20,
		paddingBottom: 137,
	},
	heroiTexto: {
		color: TEMA.CORES.BRANCO,
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		fontSize: 20,
		marginBottom: 15,
	},
	conteudo: {
		paddingHorizontal: 32,
		backgroundColor: TEMA.CORES.BRANCO,
	},
	carrosselConteiner: {
		paddingTop: "10%",
		overflow: "visible",
		alignItems: "center",
		marginTop: "-35%",
		columnGap: 32,
		flexGrow: 1,
	},
	lista: {
		paddingVertical: 16,
		rowGap: 12,
		marginTop: 39,
	},
	listaTitulo: {
		color: TEMA.CORES.CINZA_700,
		fontSize: 16,
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
	},
	listaFiltros: {
		columnGap: 8,
	},
	secao: {
		rowGap: 32,
		marginVertical: 16,
	},
	secaoTitulo: {
		fontFamily: TEMA.FONTES.TITULO_NEGRITO,
		color: TEMA.CORES.CINZA_600,
	},
});
