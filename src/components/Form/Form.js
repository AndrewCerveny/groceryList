import React,{Component} from "react";
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state= {
      name: '',
      amount: '',
    }
  }
  handleChange = (e) => {
    const { name, value} = e.target
    this.setState({[name]:value})
  }
  onSubmitHandle = (e) => {
    e.preventDefault()
    
    const newItem = {
      id: Date.now(),
      name: this.state.name,
      amount: this.state.amount
    }
    this.props.addItem(newItem)
  }
  render() {
    return(
      <section className="form-area">
        <form className="form">
          <input 
            type='text' 
            placeholder=" Item Name"
            name="name"
            value={this.state.name}
            onChange={(e)=> this.handleChange(e)}
          />
           <input 
            type='text' 
            placeholder="Quantity"
            name="amount"
            value={this.state.amount}
            onChange={(e)=> this.handleChange(e)}
          />
          <button className="add-to-list" onClick={(e)=> this.onSubmitHandle(e)}> Add to List </button>
        </form>

      </section>
    )
  }
}
export default Form