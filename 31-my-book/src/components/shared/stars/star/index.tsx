interface StarProps {
  color?: string;
  width?: number;
  height?: number;
}

const Star = (props: StarProps) => {
  const { color = "#DEDEDE", height = 12, width = 13 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.57991 0.311157L8.41949 4.03794L12.5332 4.63923L9.55658 7.53849L10.2591 11.6344L6.57991 9.69955L2.90076 11.6344L3.60325 7.53849L0.626587 4.63923L4.74034 4.03794L6.57991 0.311157Z"
        fill={color}
      />
    </svg>
  );
};

export default Star;
