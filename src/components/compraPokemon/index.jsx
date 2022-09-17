import React, { Component } from 'react';

class CompraPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                <button className='btn btn-dark btn-sm mb-2'>Comprar Pokemon</button>
                <button className='btn btn-dark btn-sm'>Devolver Pokemon</button>
            </React.Fragment>
        )
    }
}

export default CompraPokemon;