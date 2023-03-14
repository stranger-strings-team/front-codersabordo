import React from 'react';

type Props = {size: number, axis: string}

const Spacer = (props: Props) => {
  const width = props.axis === 'vertical' ? 1 : props.size;
  const height = props.axis === 'horizontal' ? 1 : props.size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    />
  );
};
export default Spacer; 