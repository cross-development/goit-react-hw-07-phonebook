//Core
import PropTypes from 'prop-types';

const contactFormTypes = {
	onAddContact: PropTypes.func.isRequired,

	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default contactFormTypes;
