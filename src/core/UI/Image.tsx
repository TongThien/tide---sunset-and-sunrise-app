import styled from 'styled-components';

const PointerImage = styled.img`
  cursor: ${(props: { isPointer: boolean }) =>
    props.isPointer ? 'pointer' : undefined};
`;

interface ImageProps {
  width: string;
  height: string;
  name:
    | 'cloud'
    | 'bell'
    | 'dropdown'
    | 'menu'
    | 'temple'
    | 'water'
    | 'add'
    | 'sunny';
  isPointer?: boolean;
  style?: React.CSSProperties;
}

const DEFAULT_WIDTH = '50px';
const DEFAULT_HEIGHT = '50px';

const ImageSrc = (props: ImageProps) => {
  const {
    name,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    isPointer = false,
    style,
  } = props;
  return (
    <PointerImage
      isPointer={isPointer}
      src={`/images/${name}.svg`}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default ImageSrc;
