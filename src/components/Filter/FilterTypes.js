//Core
import PropTypes from 'prop-types';

const filterTypes = {
	value: PropTypes.string.isRequired,

	onChangeFilter: PropTypes.func.isRequired,

	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};

export default filterTypes;
