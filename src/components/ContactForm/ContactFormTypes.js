//Core
import PropTypes from 'prop-types';

const contactFormTypes = {
	onAddContact: PropTypes.func.isRequired,

	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.number.isRequired,
		}).isRequired,
	).isRequired,
};

export default contactFormTypes;
