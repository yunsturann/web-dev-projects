interface LeftSideListProps {
  title: string;
  items: { id: number; text: string }[];
}

const LeftSideList = (props: LeftSideListProps) => {
  const { title, items } = props;

  return (
    <div className="left-side-list">
      <h2>{title}</h2>
      <ul className="genres">
        {items.map(({ text, id }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideList;
