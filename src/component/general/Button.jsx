import { memo } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../helper/actionClassName.helper';

export const BtnPrimaryBrand = memo((props) => (
  <button
    type={props.type || 'button'}
    disabled={props.disabled}
    onClick={props.handle}
    className={cn(
      'text-base font-medium py-3 px-[52px] rounded transition duration-200 ease-in-out',
      props.className,
      {
        'hover:bg-primary-700 hover:text-white hover:border-primary-700':
          props.isHoverDarken,
        'hover:opacity-80': !props.isHoverDarken,
      },
      {
        'text-primary-500 bg-white border-2 border-primary-500':
          props.isOutline,
        'text-white bg-primary-500': !props.isOutline,
      },
    )}
    {...props.other}
  >
    {props.children}
  </button>
));

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
