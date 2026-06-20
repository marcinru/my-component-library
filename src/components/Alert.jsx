import { StyledAlert } from './Alert.styles.js';
import PropTypes from 'prop-types';

export default function Alert({ message, type = 'info', ...props }) {
  return (
    <StyledAlert $type={type} {...props}>
      {message}
    </StyledAlert>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};
