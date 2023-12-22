import { useContext } from "react";
import { CarrinhoContexto, CarrinhoContextoDadosProps } from "../contextos/CarrinhoContexto";

export function useCarrinho(): CarrinhoContextoDadosProps {
	return useContext(CarrinhoContexto);
}
