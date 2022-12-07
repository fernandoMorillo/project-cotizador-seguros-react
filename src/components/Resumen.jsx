import React from 'react';
import styled from '@emotion/styled';
import {primeraMayusculas} from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primeraMayusculas(marca)}</li>
                <li>Plan: {primeraMayusculas(plan)}</li>
                <li>Año del auto:  {year}</li>
            </ul>
        </ContenedorResumen>

    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;