import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import '../assets/css/app.css';
import List from './list';
import AddItem from './add-items';
import listData from '../helpers/list_data';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            listData:[],
        };
    }
    addItem(Item){
        this.setState({
            listData: [Item, ...this.state.listData],
        })
    }
    getListData(){
        this.setState({
            listData:listData,
        });
    }

    componentDidMount(){
        this.getListData();
    }

    render() {
        const {listData} = this.state;
        return (
            <div>
                <div className="container">
                    <h1 className='center'>To do list</h1>
                    <AddItem addItemCallback={this.addItem.bind(this)} />
                    <List listData={listData}/>
                </div>
            </div>
        )
    }
};

export default App;
