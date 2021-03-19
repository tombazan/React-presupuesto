import React from 'react';
import PropTypes from 'prop-types'

const Gastos = ({gasto, eliminarGasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">$ {gasto.cantidad}</span>
            <button
                onClick={() => eliminarGasto(gasto)}
                className="button"
                style={{ backgroundColor: 'red', color: '#FFF', margin: 0, padding: '1px 25px', lineHeight: '37px', marginLeft: '5px'}}>&times;
            </button>
        </p>
    </li>
);

Gastos.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gastos;