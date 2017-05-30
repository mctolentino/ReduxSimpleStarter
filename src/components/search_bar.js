import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: 'test'};
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.state.term}
                        onChange={event => this.setState({term: event.target.value})}
                    />
                </div>
                <div>
                    Value of the input: {this.state.term}
                </div>
            </div>
        )
    }
}

export default SearchBar;