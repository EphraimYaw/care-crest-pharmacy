import React from 'react';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Akosua M.',
    text: 'Care Crest is my go-to for all medications. Fast delivery and friendly support every single time!',
    rating: 5,
    image: '/assets/customers/akosua.jpg',
  },
  {
    id: 2,
    name: 'Yaw A.',
    text: 'I love how easy it is to order. I even spoke to a pharmacist right on the site — very helpful!',
    rating: 5,
    image: '/assets/customers/yaw.jpg',
  },
  {
    id: 3,
    name: 'Esi T.',
    text: 'Affordable prices and quick service. Care Crest is doing a great job for the community.',
    rating: 4,
    image: '/assets/customers/esi.jpg',
  },
];

function CustomerTestimonials() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What Our Customers Are Saying</h2>
      <p style={styles.subtitle}>Real stories from people who trust Care Crest for their health needs</p>

      <div style={styles.grid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={styles.card}>
            <p style={styles.text}>"{testimonial.text}"</p>
            <div style={styles.stars}>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FiStar key={i} size={16} color="#cd1643" />
              ))}
            </div>
            <div style={styles.customer}>
              <img src={testimonial.image} alt={testimonial.name} style={styles.avatar} />
              <p style={styles.name}>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem 2rem 3rem',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Aeonik, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 600,
    color: '#000',
    marginBottom: '0.3rem',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: '2rem',
    fontSize: '0.95rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
    textAlign: 'left',
  },
  text: {
    fontSize: '0.95rem',
    color: '#333',
    fontStyle: 'italic',
    marginBottom: '1rem',
  },
  stars: {
    display: 'flex',
    gap: '0.2rem',
    marginBottom: '1rem',
  },
  customer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#000',
  },
};

export default CustomerTestimonials;
