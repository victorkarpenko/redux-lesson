import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import Header from "./components/Header/Header";

import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import Contacts from './components/Contacts/Contacts';

import { connect } from "react-redux";
import addUserAction from "./redux/actions/userAction";

class App extends Component {
  state = {
    users: [],
  };
  
  componentDidMount() {
    const { allUsers } = this.props;
    this.setState({ users: [...allUsers] });
  }
  componentDidUpdate(prevProps, prevState) {
    const { user, allUsers } = this.props;

    if (user !== prevProps.user || allUsers !== prevProps.allUsers) {
      this.setState({ users: [...allUsers] });
    }
  }

  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <div>
          {this.state.users.map((user) => {
            return (
              <li key={user.email}>
                {user.email}{" "}
                <button
                  type="button"
                  onClick={() => this.props.deleteUser(user.email)}
                >
                  del
                </button>
              </li>
            );
          })}
        </div>
        <Main className="Main">
          <Contacts />
        </Main>
        <Footer className="Footer" />
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    user: store.user,
    allUsers: store.allUsers,
  };
};
const mapDispatchToProps = {
  deleteUser: addUserAction.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
