const readingList = [
  { title: 'Token Economy', author: 'Shermin Voshmgir' },
  { title: 'The Pleasure of Finding Things Out', author: 'Richard Feynman' },
  { title: 'The Selfish Gene', author: 'Richard Dawkins' },
  { title: 'Debt: The First 5000 Years', author: 'David Graeber' },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky' },
  { title: 'Genghis Khan and the Making of the Modern World', author: 'Jack Weatherford' },
  { title: "Why Your Cat Thinks You're an Idiot", author: 'Sam Hart' },
  { title: 'Dune', author: 'Frank Herbert' },
  { title: 'Happy Things in Sorrow Times', author: 'Tehmina Durrani' },
  { title: 'Blockchain Technology', author: 'S. Chandramouli et al.' },
];

export default function Books() {
  return (
    <div className="books">
      <p className="books-label">On The Shelf</p>
      <ul className="books-list">
        {readingList.map((b) => (
          <li key={b.title}>
            <span className="book-title">{b.title}</span>
            <span className="book-author">{b.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}