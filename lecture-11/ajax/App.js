import React from 'react';
import ReactDOM from 'react-dom';


export class Exchange extends React.Component {

    constructor(props) {
        super(props);
        this.baseUrl = 'https://api.fixer.io/latest?base=USD';
        this.state = {
            rates: []
        }
    }

    render() {
        return (
            <div>
                <div>Current date: {this.state.date ? this.state.date : ''}</div>
                <div>Base currency: {this.state.base ? this.state.base : ''}</div>
                <ul>
                    {this.state.rates.map(rate => <Rate key={rate.currency} rate={rate}/>)}
                </ul>
            </div>)
    }

    // communication using XMLHttpRequest
    /*componentDidMount() {
        const request = new XMLHttpRequest();
        request.open('GET', this.baseUrl, true);
        request.send();

        request.onreadystatechange = () => {
            if (request.readyState !== 4) return;

            if (request.status !== 200) {
                console.error(request.status + ': ' + request.statusText);
            } else {
                const obj = JSON.parse(request.responseText);
                this.setState(this.convertData(obj));
            }
        }
    }*/

    // communication using fetch
    componentDidMount() {
        fetch(this.baseUrl)
            .then((resp) => resp.json())
            .then(data => this.setState(this.convertData(data)));
    }

    convertData = (data) => {
        const result = {
            date: data.date,
            base: data.base,
            rates: []
        };

        for (const i in data.rates) {
            result.rates.push({currency: i, rate: data.rates[i]})
        }
        return result;
    }

}

export class Rate extends React.Component {

    render() {
        return <li>{this.props.rate.currency} - {this.props.rate.rate}</li>;
    }
}


ReactDOM.render(<Exchange/>, document.getElementById('app-root'));