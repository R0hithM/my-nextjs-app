import React from 'react';
import Layout from '../layout';
import Card from '../components/Card';

const Home: React.FC = () => {
  const books = [
    { id: 1, title: 'Book 1', imageSrc: '/book1.jpg', price: 10 },
    { id: 2, title: 'Book 2', imageSrc: '/book2.jpg', price: 15 },
    { id: 3, title: 'Book 3', imageSrc: '/book3.jpg', price: 20 },
    // Add more books here
  ];

  return (
    <Layout>
      <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <Card key={book.id} title={book.title} imageSrc={book.imageSrc} price={book.price} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
