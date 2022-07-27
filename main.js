async function bookArraySetup(searchText) {
  const searchURLStart = "https://www.googleapis.com/books/v1/volumes?q=";
  const keyURL = "&:keyes&key=AIzaSyAOinMw14WBlPvyDUWNTgOMxhmlW5LNsKU";
  const fetchGoogleBookArray = await fetch(
    `${searchURLStart}${searchText}${keyURL}${"&maxResults=20"}`
  );
  const text = await fetchGoogleBookArray.json();
  return text.items;
}

async function getBookArraySetup() {
  const searchText = document.getElementById("searchBar").value;
  const bookArray = await bookArraySetup(searchText);

  const parent = document.getElementById("bookArrayArea");
  parent.className = "bookArrayArea";
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  if (bookArray === undefined) {
    const bookInfo = document.createElement("h1");
    const title = document.createTextNode(
      "No books match that search try something else"
    );

    bookInfo.appendChild(title);

    parent.appendChild(bookInfo);
  } else {
    bookArray.map((book, index) => {
      const bookInfo = document.createElement("div");
      bookInfo.className = "bookInfo__text";

      //title
      const title = document.createElement("h1");

      const titleText = document.createTextNode(
        "Title: " + book.volumeInfo.title
      );

      title.appendChild(titleText);

      bookInfo.appendChild(title);

      //author

      const author = document.createElement("p");

      const authorText = document.createTextNode(
        "Author: " + book.volumeInfo.authors[0]
      );

      author.appendChild(authorText);

      bookInfo.appendChild(author);

      //description

      const description = document.createElement("p");

      const descriptionText = document.createTextNode(
        "Description: " + book.volumeInfo.description
      );

      description.appendChild(descriptionText);

      bookInfo.appendChild(description);

      //image

      var image = document.createElement("img");
      image.src = book.volumeInfo.imageLinks.thumbnail;
      image.className = "pictureBox__picture";

      var imageDiv = document.createElement("div");
      imageDiv.className = "bookInfo__pictureBox";

      imageDiv.appendChild(image);

      //picture and text put in same div

      const pictureAndText = document.createElement("div");
      pictureAndText.className = "bookArrayArea__bookInfo";

      pictureAndText.appendChild(bookInfo);
      pictureAndText.appendChild(imageDiv);
      // pictureAndText.appendChild(image);

      //add on click for more info function

      pictureAndText.addEventListener("click", () => {
        console.log(index);
        moreInfo(index);
      });

      //add everything to parent

      parent.appendChild(pictureAndText);
    });
  }

  async function moreInfo(index) {
    parent.className = "bookArrayArea--extraDetail";
    console.log(index);
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    const bookInfo = document.createElement("div");
    bookInfo.className = "bookInfo__text";

    //title
    const title = document.createElement("h1");

    const titleText = document.createTextNode(
      "Title: " + bookArray[index].volumeInfo.title
    );

    title.appendChild(titleText);

    bookInfo.appendChild(title);

    //author

    const author = document.createElement("p");

    const authorText = document.createTextNode(
      "Author: " + bookArray[index].volumeInfo.authors[0]
    );

    author.appendChild(authorText);

    bookInfo.appendChild(author);

    //publisher

    const publisher = document.createElement("p");

    const publisherText = document.createTextNode(
      "Publisher: " + bookArray[index].volumeInfo.publisher
    );

    publisher.appendChild(publisherText);

    bookInfo.appendChild(publisher);

    //publish date

    const publishDate = document.createElement("p");

    const publishDateText = document.createTextNode(
      "Publish Date: " + bookArray[index].volumeInfo.publishedDate
    );

    publishDate.appendChild(publishDateText);

    bookInfo.appendChild(publishDate);

    //page count

    const pageCount = document.createElement("p");

    const pageCountText = document.createTextNode(
      "Page Count: " + bookArray[index].volumeInfo.pageCount
    );

    pageCount.appendChild(pageCountText);

    bookInfo.appendChild(pageCount);

    //description

    const description = document.createElement("p");

    const descriptionText = document.createTextNode(
      "Description: " + bookArray[index].volumeInfo.description
    );

    description.appendChild(descriptionText);

    bookInfo.appendChild(description);

    //image
    //image

    var image = document.createElement("img");
    image.src = bookArray[index].volumeInfo.imageLinks.thumbnail;
    image.className = "pictureBox__picture";

    var imageDiv = document.createElement("div");
    imageDiv.className = "bookInfo__pictureBox";

    imageDiv.appendChild(image);

    //picture and text put in same div

    const pictureAndText = document.createElement("div");
    pictureAndText.className = "bookArrayArea__bookInfo";

    pictureAndText.appendChild(bookInfo);
    pictureAndText.appendChild(imageDiv);
    // pictureAndText.appendChild(image);

    //add everything to parent

    parent.appendChild(pictureAndText);
  }
}

console.log("test end");

console;
