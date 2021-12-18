import React, {Component} from 'react'

class PetForm extends Component {

    constructor(props){
        super(props) // calls constructor of parent class 
        this.state = {
            name: props.name,
            amount: props.amount,
            brand: props.brand
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }
    handleBrandChange(event){
        this.setState({brand: event.target.value})
    }
    handleAmountChange(event){
        this.setState({amount: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        console.log(this.state) //for the fields
        return(
            <div>
                <form>
                    <label>
                        Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label> 
                    <label>
                        Amount of Food
                    <input type="text" value={this.state.amount} onChange={this.handleAmountChange}/>
                    </label> 
                    <label>
                       Brand of Food
                    <input type="text" value={this.state.brand} onChange={this.handleBrandChange}/>
                    </label> 
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default PetForm