import ListItem from "../ListItem";

const List = ({ itemsArray }) => {
  return (
    <ul>
      {itemsArray.map(element => <ListItem text={element} />)}
    </ul>
  );
};

export default List;