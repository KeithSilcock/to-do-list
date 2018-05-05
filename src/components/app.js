import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import axios from 'axios';
import '../assets/css/app.css';
import List from './list';
import AddItem from './add-items';
import listData from '../helpers/list_data';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=keithicusMaximus';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            listData:[],
        };
    }
    async addItem(item){
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        this.getListData();
    }
    async getListData(){
        try {
            const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);
            this.setState({
                listData: response.data.todos,
            })
        }
        catch(err){
            console.log('error:', err.message)
        }

    }
    componentDidMount(){
        this.getListData();
    }
    async deleteItem(id){
        const response = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
        console.log(response)
        this.getListData();
    }

    render() {
        const {listData} = this.state;
        return (
            <div>
                <div className="container">
                    <h1 className='center'>To do list</h1>
                    <AddItem addItemCallback={this.addItem.bind(this)} />
                    <List listData={listData} deleteItemCallback={this.deleteItem.bind(this)}/>
                </div>
            </div>
        )
    }
};

export default App;
