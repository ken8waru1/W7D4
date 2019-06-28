import React from 'react';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestOnePoke;
  }

  render () {
    console.log('detail render');
    // debugger
    return (
      <div>
        <h3>im beginning to hate pokemon.  even you bulbasaur</h3>
      </div>
    )
  }
}

export default PokemonDetail;