function ListGroup() {
  /*Use a fragment to wrap children*/

  const items = ["New York", "sdgwsg", "soighfsöoidhg"];

  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
