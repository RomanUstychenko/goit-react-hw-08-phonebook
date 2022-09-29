import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import css from "./ContactForm.module.css"

export default class ContactForm extends Component  {
    state = {
        name: '',
        number: '',
      }

      nameID = nanoid();
      telID = nanoid();

      handleChange = (e) => {
        const {name, value} = e.target;
        this.setState( 
          {[name]: value,
          }
       )
      }

      handleSubmit = (e) => {
        e.preventDefault()
        const {name, number} = this.state;
        this.props.onSubmit({name, number})
        this.setState ({
          name: '',
          number: '',
        })
      }

      
      render () {
        const {nameID, telID, handleSubmit, handleChange} = this;
        return ( 
                <form 
                className={css.form}
                onSubmit={handleSubmit}>
                <div className={css.formInput}>
                  <label htmlFor={nameID}>Name</label>
                  <input 
                  className={css.formInputName}
                  id={nameID} 
                  type="text" 
                  name="name" 
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name} 
                  onChange={handleChange} />
                </div>
                <div className={css.formInput}>
                  <label htmlFor={telID}>Number</label>
                  <input 
                  className={css.formInputTel}
                  id={telID} 
                  type="number" 
                  name="number" 
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  value={this.state.number} 
                  onChange={handleChange} 
                  required/>
                </div>
                <button 
                className={css.formBtn}
                type="submit">Add</button>
                </form>
                )
      }
    }

    ContactForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };