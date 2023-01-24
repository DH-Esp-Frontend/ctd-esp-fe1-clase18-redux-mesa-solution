import React from "react";
import {showMessage} from "../redux/slice"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

/**
 * 
 * Extra Bonus: Crear un componente que contenga:
 * - Un botón que despache una accion con un mensaje de prueba
 * - Trear el estado de redux donde deberia estar guardado el mensaje anterior
 * - Este componente debería poder mostrar el mensaje que guardamos 
 * - Descomentar el componente TestRedux que se encuentra en App.tsx para verificar que el mensaje se visualiza en pantalla
 */
const TestRedux = () => {
  const state = useSelector((state:RootState) => state.message);
  const dispatch = useDispatch();

  return (
    <>
    <button onClick={()=>dispatch(showMessage("Testeando el store"))}>Test</button>
    {state && state}
    </>
  )

};

export default TestRedux;
