import scss from "./Filter.module.scss"
import PropTypes from 'prop-types'

const Filter = ({ filter, handleChange, findID }) => 
(
    <div className={scss.contactFilter}>
              <label
              className={scss.contactFilterLabel}
              htmlFor={findID}
              >Find contacts by name
              </label>
              <input 
              className={scss.contactFilterInput}
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

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    findID: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };
  export default Filter;