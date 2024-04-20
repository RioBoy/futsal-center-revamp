import { Link } from 'react-router-dom';

const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push('text-white bg-purple-500');
  if (props.isHover)
    className.push('transition duration-200 ease-in-out hover:bg-btn-darken');
  if (props.isLight) className.push('text-cancel bg-input');
  if (props.hasShadow) className.push('btn-shadow');
  if (props.isBlock) className.push('block');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  if (props.isDisabled) {
    return (
      <button
        className={className.join(' ')}
        style={props.style}
        onClick={onClick}
        disabled
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
