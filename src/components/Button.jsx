import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles.js';

export default function Button({
  label,
  variant = 'primary',
  size = 'md',
  onClick,
  ...props
}) {
  return (
    <StyledButton $variant={variant} $size={size} onClick={onClick} {...props}>
      {label}
    </StyledButton>
  );
}

Button.PropTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
};
