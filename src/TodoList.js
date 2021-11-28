import { Component } from 'react';
import check from './check.png';
import man from './man.jpg';

export class TodoList extends Component {
  state = {
    userInput: '',
    list: [],
  };

  changeUserInput(input) {
    this.setState({
      userInput: input,
    });
  }

  addToDo(input) {
    if (input === '') {
      alert('Please enter');
    } else {
      let listArray = this.state.list;
      listArray.push(input);
      this.setState({ list: listArray, userInput: '' });
    }
  }

  deletetoDo() {
    let listArray = this.state.list;
    listArray = [];
    this.setState({ list: listArray, userInput: '' });
  }

  crossLine = (event) => {
    const li = event.target;
    li.classList.toggle('crossed');
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='todoList'>
        <form onSubmit={this.onFormSubmit}>
          <div className='container'>
            <input
              value={this.state.userInput}
              placeholder='What would you like to buy?'
              type='text'
              onChange={(e) => this.changeUserInput(e.target.value)}
            />
          </div>

          <div className='container btn'>
            <button
              className='btn-add'
              onClick={() => this.addToDo(this.state.userInput)}
            >
              Add
            </button>
          </div>

          <ul>
            {this.state.list.map((val, index) => (
              <li onClick={this.crossLine} key={index}>
                <img src={check} width='40px' />
                {val}
              </li>
            ))}
          </ul>
          <div className='container btn'>
            <button
              className='btn-delete'
              onClick={() => this.deletetoDo(this.state.userInput)}
            >
              Delete
            </button>
          </div>
          <div className='container '>
            <img className='woman' src={man} width='200px' />
          </div>
        </form>
      </div>
    );
  }
}
