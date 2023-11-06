import TodoItem from "./TodoItem";

function TodoItems(props: { items: any[]; delete: any }) {
  const handleDelete = (item_id: number) => {
    props.delete(item_id);
  };
  const { items } = props;
  return (
    <div>
      {items.map((item: any, index: any) => (
        <TodoItem key={index} item={item} delete={handleDelete} />
      ))}
    </div>
  );
}

export default TodoItems;
