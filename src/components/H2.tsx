// H2.tsx
import React from 'react';

interface H2Props {
  children: React.ReactNode; // propsで渡された内容を表示する
}

const H2: React.FC<H2Props> = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-center mb-8 text-custom-blue">
      {children}
    </h2>
  );
};

export default H2;
