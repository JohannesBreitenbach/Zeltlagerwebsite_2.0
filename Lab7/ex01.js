var http = require("http");

var books = [
  {
    isbn: "1",
    title: "Book1",
    author: "Markus Zanker",
    description: "Lorem ipsum dolor sit amit",
  },
  {
    isbn: "2",
    title: "Book2",
    author: "Max Mustermann",
    description: "The new book of",
  },
];

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><head>");
    res.write("<title>My title<title/>");
    res.write("<head/><body>");
    res.write("<h2>All my books!<h2/>");
    res.write("<table>");
    res.write("<tr><th>ISBN</th><th>Title</th><th>Author</th></tr>");
    books.forEach((el) => {
      res.write(
        "<tr>" +
          "<td>" +
          el.isbn +
          "</td>" +
          "<td>" +
          el.title +
          "</td>" +
          "<td>" +
          el.author +
          "</td>" +
          "</tr>"
      );
    });
    res.write("</table>");

    
    res.write("</body> </html>");
    res.end();
  })
  .listen(8080); //gib und einen response auf 8080
