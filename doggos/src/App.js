import React from 'react';
import axios from 'axios';
import './styles.css';

class App extends React.Component {

    constructor() {
        super();

        this.state= {

            doggos: [],
            dogBreed: ''
        
        }
    
    }

    handleChanges = (e) => {

        console.log(e.target.value);
        this.setState({
            ...this.state,
            dogBreed: e.target.value

        })

    }

    fetchDoggos = () => {

        alert(`Fetching ${this.state.dogBreed} dogs.`);

        axios.get(`https://dog.ceo/api/breed/${this.state.dogBreed}/images`)

        .then((res) => {
            this.setState({
                ...this.state,
                doggos: res.data.message
            });
        })

        .catch((err) => {
            console.log(err);
        })

    }

    componentDidMount() {

        axios.get('https://dog.ceo/api/breed/hound/images')

        .then((res) => {
            console.log(res);
            this.setState({
                ...this.state,
                doggos:res.data.message
            });

        })

        .catch((err) => {
            console.log(err);
        })

    }

    componentDidUpdate(prevProps, prevState) {
        // runs when state or props have been updated
        // always use an if statement to prevent infinite loops
        if (prevState.doggos!== this.state.doggos) {
            console.log('doggos have changed')
        }

        if (this.state.dogBreed === 'chihuahua') {
            axios.get(`https://dog.ceo/api/breed/mastiff/images`)
            .then((res) => {
                console.log();
                this.setState({
                    ...this.state,
                    doggos: res.data.message
                });
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    render() {
        
        return (

            <div className='App'>

                <h1>
                    Hello WEBPT22!
                </h1>
                <h2>
                    Here are some Doggos!
                </h2>
                <input 
                    placeholder='Dog breed?' 
                    value={this.state.dogBreed} //read value from component state
                    type='text' 
                    onChange={this.handleChanges} //write to Component state
                 />
                 <button onClick={this.fetchDoggos}>Fetch Doggos</button>
                <div>
                    {this.state.doggos.map((doggo) => {
                    return <img width='200' className='doggo' src={doggo} key = {doggo} />})}
                </div>

            </div>
        )
    }
}

export default App