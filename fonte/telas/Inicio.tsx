import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BotaoIcone } from "../componentes/BotaoIcone";
import { CarrinhoBotao } from "../componentes/CarrinhoBotao";
import { EntradaPesquisar } from "../componentes/EntradaPesquisar";
import { CartaoDestaque } from "../componentes/CartaoDestaque";
import { Etiqueta } from "../componentes/Etiqueta";
import { CartaoCatalogo } from "../componentes/CartaoCatalogo";
import { PRODUTOS, Cafe } from "../dados/cafes";
import { TEMA } from "../estilos/tema";
import Animated, {
	Extrapolate,
	FadeIn,
	interpolate,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";
import { Torrada } from "../componentes/Torrada";

export function Inicio() {
	const [filtros, defFiltros] = useState<string[]>(PRODUTOS.map((dados) => dados.title));
	const scrollY = useSharedValue(0);
	const [mostrarTorrada, defMostrarTorrada] = useState<Cafe | undefined>();

	const lidarRolagem = useAnimatedScrollHandler({
		onScroll: (evento) => {
			scrollY.value = evento.contentOffset.y;
		},
	});

	function lidarAdicionarCafe(cafe: Cafe) {
		defMostrarTorrada(cafe);
		setTimeout(() => {
			defMostrarTorrada(undefined);
		}, 3000);
	}

	const secaoTituloFixoEstilo = useAnimatedStyle(() => ({
		position: "absolute",
		width: "100%",
		paddingTop: 16,
		paddingHorizontal: 32,
		paddingBottom: 12,
		backgroundColor: TEMA.CORES.CINZA_100,
		zIndex: 1,
		opacity: interpolate(scrollY.value, [600, 740], [0, 1], Extrapolate.CLAMP),
		transform: [
			{ translateY: interpolate(scrollY.value, [600, 750], [-40, 0], Extrapolate.CLAMP) },
		],
	}));
	const secaoTituloAnimadoEstilo = useAnimatedStyle(() => ({
		opacity: interpolate(scrollY.value, [650, 730], [1, 0], Extrapolate.CLAMP),
	}));

	return (
		<SafeAreaView style={estilos.conteiner}>
			<Animated.View style={secaoTituloFixoEstilo}>
				{scrollY.value <= 1270 && <Text style={estilos.secaoTitulo}>{PRODUTOS[0].title}</Text>}
				{scrollY.value > 1270 && <Text style={estilos.secaoTitulo}>{PRODUTOS[1].title}</Text>}
			</Animated.View>
			{mostrarTorrada && <Torrada>{mostrarTorrada.titulo} adicionado ao carrinho</Torrada>}
			<Animated.ScrollView onScroll={lidarRolagem} scrollEventThrottle={16}>
				<View style={estilos.cabecalho}>
					<View style={estilos.local}>
						<BotaoIcone icone="map-marker" tipo="primario" />
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
						data={PRODUTOS.reduce((secoes, secao) => {
							// escolhe um café aleatório de cada lista
							secoes.push(secao.data[Math.trunc(Math.random() * secao.data.length)]);
							return secoes;
						}, [] as Cafe[])}
						keyExtractor={(item) => "café-" + item.id}
						renderItem={({ item, index }) => (
							<Animated.View entering={FadeIn.delay((index + 1) * 500)}>
								<CartaoDestaque
									onPress={() => lidarAdicionarCafe(item)}
									dados={item}
									tamanho={index > 0 ? "pequeno" : "grande"}
								/>
							</Animated.View>
						)}
					/>
					<View style={estilos.lista}>
						<Text style={estilos.listaTitulo}>Nossos cafés</Text>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={estilos.listaFiltros}
						>
							{PRODUTOS.map(({ title }, ind) => (
								<Etiqueta
									key={title + ind}
									deveMudar={filtros.length > 1 || !filtros.includes(title)}
									selecionadoPadrao={filtros.includes(title)}
									aoSelecionar={(selecionado) => {
										if (selecionado) defFiltros((filtros) => [...filtros, title]);
										else defFiltros((filtros) => filtros.filter((f) => f != title));
									}}
								>
									{title}
								</Etiqueta>
							))}
						</ScrollView>
						{PRODUTOS.map((item, index) =>
							filtros.includes(item.title) ? (
								<View style={estilos.secao} key={item.title.split(" ").join("")}>
									<Animated.Text
										style={[estilos.secaoTitulo, index == 0 && secaoTituloAnimadoEstilo]}
									>
										{item.title}
									</Animated.Text>
									{item.data.map((itemDados, index) => (
										<CartaoCatalogo key={itemDados.id} index={index} dados={itemDados} />
									))}
								</View>
							) : null
						)}
					</View>
				</View>
			</Animated.ScrollView>
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
