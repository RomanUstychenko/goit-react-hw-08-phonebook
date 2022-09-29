import css from "./Filter.module.css"
import PropTypes from 'prop-types'

const Filters = ({ filter, handleChange, findID }) => 
(
    <div className={css.contactFilter}>
              <label
              className={css.contactFilterLabel}
              htmlFor={findID}
              >Find contacts by name
              </label>
              <input 
              className={css.contactFilterInput}
              id={findID}
              type="text" 
              name="filter" 
              value={filter}
              onChange={handleChange}
              title="Search"
              required
              />
          </div>
);

Filters.propTypes = {
    filter: PropTypes.string.isRequired,
    findID: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  export default Filters;