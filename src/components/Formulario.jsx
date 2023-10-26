

const Formulario = () => {
  return (
    <div className="contenedor">
        <form>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text"
                    id="ciudad"
                    name="ciudad"
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">País</label>
                <select
                    id="pais"
                    name="pais"
                >
                    <option value=""> Seleccione un país </option>
                    <option value="">Seleccione un país</option>
                    <option value="AR">Argentina</option>
                    <option value="BO">Bolivia</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CU">Cuba</option>
                    <option value="DO">República Dominicana</option>
                    <option value="EC">Ecuador</option>
                    <option value="SV">El Salvador</option>
                    <option value="ES">España</option>
                    <option value="GT">Guatemala</option>
                    <option value="HN">Honduras</option>
                    <option value="MX">México</option>
                    <option value="NI">Nicaragua</option>
                    <option value="PA">Panamá</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Perú</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="UY">Uruguay</option>
                    <option value="VE">Venezuela</option>
                </select>
            </div>

            <input 
                type="submit"
                value="Consultar clima"
            />

        </form>
    </div>
  )
}

export default Formulario