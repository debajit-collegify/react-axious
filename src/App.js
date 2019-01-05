import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {
    constructor(){
        super();
        this.state = {
            bookList : []
        }

        axios.get(`http://www.mocky.io/v2/5c2dcd8b2f0000873517522b`)
            .then(res => {
                this.setState({bookList : res.data});
            });
    }

    handelDelete = bookListId => {

        //console.log('Event handeler called' , bookListId);
        const bookList_array = this.state.bookList.filter(c => c.id !== bookListId);
        this.setState({bookList : bookList_array});
    };

  render() {
        //console.log(this.state.bookList)
      return (
          <div className="App">
            <h2>Example of handeling HTTP request</h2>
            <img src={logo} className="App-logo" alt="logo" /><br/>


              <table className="">
                  <thead>
                  <tr>
                      <th>ID</th>
                      <th>ImageUrl</th>
                      <th>Status</th>
                      <th>Title</th>
                      <th>Price</th>

                  </tr>
                  </thead>
                  {this.state.bookList.map((dynamicData, i) => <Content
                      key={i} id={this.state.bookList.id} onDelete={this.handelDelete} componentData = {dynamicData}/>)}
              </table>

          </div>
    );
  }
}

class Content extends React.Component {

   /* handelDelete() {

        //console.log('Event handeler called' , counterId);
        const booklist_array = this.state.bookList.filter(c => c.props.componentData.id !== id);
        this.setState({bookList : booklist_array});
    };*/

    render() {

        return (

                <tr>
                    <td>{this.props.componentData.id}</td>
                    <td>{this.props.componentData.img_url}</td>
                    <td>{this.props.componentData.status}</td>
                    <td>{this.props.componentData.title}</td>
                    <td>{this.props.componentData.price}</td>
                    <td><button  onClick={ () => this.props.onDelete(this.props.componentData.id)} className="btn btn-primary m-3">Delete</button></td>
                </tr>

        );
    }
}

export default App;
