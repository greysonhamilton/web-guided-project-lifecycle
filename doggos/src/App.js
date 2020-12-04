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

    render() {
        
        return (

            <div className='App'>

                <h1>
                    Hello WEBPT22!
                </h1>
                <h2>
                    Here are some Doggos!
                </h2>
                <div>
                    {this.state.doggos.map((doggo) => {
                    return <img width='200' className='doggo' src={doggo} key = {doggo} />})}
                </div>

            </div>
        )
    }
}

export default App