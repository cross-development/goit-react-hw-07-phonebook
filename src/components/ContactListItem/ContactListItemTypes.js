//Core
import PropTypes from 'prop-types';

const contactListItemTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default contactListItemTypes;
