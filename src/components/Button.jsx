import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles.js';

export default function Button({
  label,
  variant = 'primary',
  onClick,
  ...props
}) {
  return (
    <StyledButton $variant={variant} onClick={onClick} {...props}>
      {label}
    </StyledButton>
  );
}

Button.PropTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};
