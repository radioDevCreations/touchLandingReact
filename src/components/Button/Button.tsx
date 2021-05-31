import { FC } from 'react';
import './Button.scss';

const STYLES = ["button--primary", "button--outline"];
const SIZES = [
  "button--medium",
  "button--large",
  "button--mobile",
  "button--wide",
];
const COLOR = ["primary", "blue", "red", "green"];

export interface ButtonProps {
  children?: any[] | any | string;
  type?: "button" | "submit" | "reset";
  click?: () => void ;
  buttonStyle?: string;
  buttonSize?: string;
  buttonColor?: string;
}

const defaultButtonProps: ButtonProps = {
children: undefined,
type: "button",
click: undefined,
buttonStyle: undefined,
buttonSize: undefined,
buttonColor: undefined,
}

export const Button: FC<ButtonProps> = (
  props = defaultButtonProps
) => {
    const checkButtonStyle = !!props.buttonStyle && STYLES.includes(props.buttonStyle) ?
    props.buttonStyle :
    STYLES[0];

    const checkButtonSize = !!props.buttonSize && SIZES.includes(props.buttonSize) ?
    props.buttonSize :
    SIZES[0];

    const checkButtonColor = !!props.buttonColor && COLOR.includes(props.buttonColor) ?
    props.buttonColor :
    null;

  return (
    <button
      className={`button ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={props.click}
      type={props.type}

    >
      {props.children}
    </button>
  );
};
