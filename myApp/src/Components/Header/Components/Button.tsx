import * as React from "react";
import styled from "styled-components";

function Button(props: any) {
  const { title, ...rest } = props;
  return <Style.Button {...rest}>{title}</Style.Button>;
}

export default Button;

const Style = {
  Button: styled.button`
    background: none;
    width: 100px;
    white-space: nowrap;
    height: auto;
    box-shadow: 3px 5px;
  `,
};
