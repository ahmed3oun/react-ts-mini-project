function TodoItem(props: { item: {id: number; title: string;} , delete: any }) {

    
    const handleDelete = (item_id: any) => {
        props.delete(item_id)
    }

  const { item } = props;
  return (
    <div>
      <span> {item.id} </span>
      <span> {item.title} </span>
      <button onClick={() => handleDelete(item.id)} >Delete</button>
    </div>
  );
}

export default TodoItem;
