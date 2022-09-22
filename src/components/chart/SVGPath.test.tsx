import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SVGPath from './SVGPath';

test('SVGPath', () => {
  render(
    <SVGPath
      pathRef={{}}
      sunRef={{}}
      sunPosition={{ x: 30, y: 90 }}
      isMoon={false}
    />
  );
});
