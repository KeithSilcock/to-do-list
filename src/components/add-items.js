import React from 'react';

class AddItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            details:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    handleChange(event){
        const {name,value} = event.target;

        this.setState({
            [name]:value,
        })
    }
    handleAddItem(event){
        event.preventDefault();

        this.props.addItemCallback(this.state);
    }

    render(){
        const {title, details} = this.state;
        return(
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className="col s12 m8 offset-m" >
                        <label>Title</label>
                        <input name='title' value={title} type="text" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m8 offset-m" >
                        <label>Details</label>
                        <input name='details' value={details} type="text" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="right-align">
                    <button className="btn purple darken-2">Add Item</button>
                </div>
            </form>
        )
    }
}

export default AddItem;