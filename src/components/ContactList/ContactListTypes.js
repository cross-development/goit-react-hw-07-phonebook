//Core
import PropTypes from 'prop-types';

const contactListTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};

export default contactListTypes;
