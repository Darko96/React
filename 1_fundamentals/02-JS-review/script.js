const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destrcucturing = Raspakivanje

// Raspakivanje objekta
const book = getBook(1);

// Da ne bi morali da kreiramo promenljivu za svako svojstvo iz objekta, koristimo raspakivanje
const title2 = book.title;
const author2 = book.author;

// Raspakivanje, samo navedemo imena svojstava koje zelimo da uzmemo iz objekta
// Imena promenljivih treba da budu ista kao imena svojstava unutar objekta
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, publicationDate);

// Raspakivanje niza
const primaryGenre2 = genres[0];
const secondaryGenre2 = genres[1];

console.log(primaryGenre2, secondaryGenre2);

// Da ne bi morali da kreiramo promenljivu za svaki element iz niza, koristimo raspakivanje niza
// Prva promenljiva koju ovde definisemo ce uzeti prvi element iz niza, i tako dalje...
const [primaryGenre3, secondaryGenre3] = genres;

console.log(primaryGenre3, secondaryGenre3);

// Rest i Spread operatori

// Rest operator
// Moze da bude samo na kraju niza ili objekta
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// Spread operator
// Sluzi da se izvade iz niza svi njegovi elemente
const newGenres = ["epic fantasy", ...genres];
console.log(newGenres);

// Spread operator sa objektima
const updatedBook = {
  // ...book uzima sve elemente iz objekta book i raspakuje ih u ovaj objekat
  ...book,
  moviePublicationDate: "2001-12-19",
  // ovde menjamo svojstvo koje smo ranije raspakovali iz objekta book
  pages: 1210,
};

console.log(updatedBook);

// Template literals
const summary = `${title} a ${pages}-page book, was written by ${author} nad published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
console.log(summary);

// Ternary operator
const pagesRange = pages > 1000 ? "over a 1000" : "less than 1000";
console.log(pagesRange);
console.log(`The book has ${pagesRange} pages`);

// Arrow funkcije
// Obicna funkcija
function getYear2(str) {
  return str.split("-")[0];
}
console.log(getYear2(publicationDate));

// Arrow funkcija
// Unutar zagrade se stavlja argument koji se prosledjuje funkciji
// a posle znaka => se stavlja ono sto funkcija vraca
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Short-Circuiting And Logical Operators: &&, ||, ??

// &&
// kada je prva vrednost falsa, vraca prvu vrednost
// kada je prva vrednost true, vraca drugu vrednost, ovo je korisno, jel moze da se koristi kao mini IF statement
console.log(true && "Some string");
console.log(false && "Some string");

// ||
// kada je prva vrednost true, vraca prvu vrednost
// kada je prva vrednost falsa, vraca drugu vrednost
console.log("Some string" || false);
console.log(false || "Some string");

// ?? (nullish coalescing operator)
// kada je prva vrednost true, vraca prvu vrednost
// kada je prva vrednost null ili undefined, vraca drugu vrednost
const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);
console.log(true ?? "no data");

// Optional Chaining
