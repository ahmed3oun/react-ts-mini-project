function ListItems() {
  const products = ["First Item", "Second Item", "Third item", "Fourth item"];

  return (
    <div>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </div>
  );
}

export default ListItems;
