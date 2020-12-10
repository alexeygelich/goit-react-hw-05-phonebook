import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import FormAddContacts from "./components/FormAddContacts";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { CSSTransition } from "react-transition-group";
import Alert from "./components/Alert";
import Container from "./components/Container";
import "./App.css";

const conactsBase = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    isAdded: false,
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem("contacts")) || conactsBase;
    if (localContacts) {
      this.setState({
        contacts: localContacts,
      });
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.contacts !== this.state.contacts) {
      const localContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem("contacts", localContacts);
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (!name || !number) {
      return;
    }
    if (contacts.find((el) => el.name === name)) {
      this.setState({ isAdded: true });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 1000);
    } else {
      const item = {
        id: uuid(),
        name: name,
        number: number,
      };
      this.setState((prevState) => ({ contacts: [...prevState.contacts, item] }));
    }
  };

  handleChangeFilter = ({ value }) => {
    this.setState({
      filter: value,
    });
  };

  handleFindContact = (filter) => {
    this.setState({ filter });
  };

  getFiteredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDelete = (id) => {
    return this.setState((prevState) => ({ contacts: prevState.contacts.filter((contact) => contact.id !== id) }));
  };

  render() {
    const { filter, isAdded, contacts } = this.state;
    const visibleContact = this.getFiteredContact();
    return (
      <Container>
        <section>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
            <h2 className="logo">Phonebook</h2>
          </CSSTransition>
          <FormAddContacts addContact={this.addContact} />
        </section>
        <section>
          <h2>Contacts</h2>
          <CSSTransition in={contacts.length > 1} timeout={500} classNames="fade-filter" unmountOnExit>
            <Filter value={filter} onChange={this.handleFindContact} />
          </CSSTransition>

          <ContactList visibleContact={visibleContact} handleDelete={this.handleDelete} />
          <CSSTransition in={isAdded} timeout={500} classNames="fade-alert" unmountOnExit>
            <Alert />
          </CSSTransition>
        </section>
      </Container>
    );
  }
}

export default App;
