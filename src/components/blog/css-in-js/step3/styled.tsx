import React from 'react';
import sheet from '../sheet';
import { domElements } from '../common';

const getStyle = (styleStringArray, ...interpolations) => {
  const result = [styleStringArray[0]];

  for (let i = 0, len = interpolations.length; i < len; i++) {
    result.push(interpolations[i], styleStringArray[i + 1]);
  }

  return result.join('');
};

function styled(Tag) {
  return function templateFunction(styleStringArray, ...interpolations) {
    const style = getStyle(styleStringArray, ...interpolations);

    const styledClassName = sheet().generateClassName(style);

    return function WrappedStyledComponent({ children, ...props }) {
      return (
        <Tag {...props} className={styledClassName.concat(props.className ? ` ${props.className}` : '')}>
          {children}
        </Tag>
      );
    };
  };
}

domElements.forEach((domElement) => {
  styled[domElement] = styled(domElement);
});

export default styled as typeof styled & {
  [E in keyof JSX.IntrinsicElements]: ReturnType<typeof styled>;
};
