import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../actions' 

export class AddCategory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:''
        }
    }

    inputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addCategoryToList = () => {
        const { text } = this.state
        this.props.addCategory(text);
        // this.setState({ text: '' })
    }
    
    render() {
        return (
            <div>
                <input type='text' onChange={this.inputChange} />
                <button onClick={this.addCategoryToList}>Add Category</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addCategory: text => dispatch(addCategory(text)) 
});

export default connect (null, mapDispatchToProps)(AddCategory);
