import { Component } from 'react';
import { FormStyled, Input, InputLabel, LabelName } from './ContactForm.styled';
import AddContact from './AddContact';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;

    return (
      <>
        <FormStyled onSubmit={this.handleSubmit}>
          <InputLabel>
            <LabelName>Name</LabelName>
            <Input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputLabel>
          <InputLabel>
            <LabelName>Number</LabelName>
            <Input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputLabel>
          <AddContact children="Add contact" />
        </FormStyled>
      </>
    );
  }
}

export default ContactForm;
