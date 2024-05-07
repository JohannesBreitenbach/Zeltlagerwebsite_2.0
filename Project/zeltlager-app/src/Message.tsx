function Message() {
  const name = "Hannes";
  if (name != null) {
    return <h1>Hello {name}</h1>;
  } else {
    return <h1>Hello World</h1>;
  }
}

export default Message;
