function BookCard({ title, author, content }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{content}</p>
    </div>
  );
}
export default BookCard;
