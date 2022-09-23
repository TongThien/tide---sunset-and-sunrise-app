import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SVGPath from './SVGPath';

test('SVGPath', () => {
  render(
    <SVGPath
      times={0}
      pathRef={{} as any}
      sunRef={{} as any}
      sunPosition={{ x: 30, y: 90 }}
      isMoon={false}
    />
  );
});
