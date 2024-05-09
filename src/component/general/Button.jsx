import { memo } from 'react';
import { cn } from '../../helper/actionClassName.helper';

export const BtnPrimaryBrand = memo((props) => (
  <button
    type={props.type || 'button'}
    disabled={props.disabled}
    onClick={props.handle}
    className={cn('btn', props.className, {
      'btn-primary-outline': props.isOutline,
      'btn-primary': !props.isOutline,
    })}
    {...props.other}
  >
    {props.children}
  </button>
));

export const BtnNeutral = memo((props) => (
  <button
    type={props.type || 'button'}
    disabled={props.disabled}
    onClick={props.handle}
    className={cn('btn', props.className, {
      'btn-neutral-outline': props.isOutline,
      'btn-neutral': !props.isOutline,
    })}
    {...props.other}
  >
    {props.children}
  </button>
));
