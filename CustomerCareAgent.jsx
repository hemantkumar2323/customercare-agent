import React, { useState } from 'react';

export default function CustomerCareAgent() {
  const [queries, setQueries] = useState([
    {
      customer: 'Ankit R.',
      question: 'Where is my order? It’s been 8 days.',
      autoResponse: 'Hi Ankit! We’re really sorry for the delay 🙏 Your order is in transit and should arrive in 1-2 days. Here’s your tracking link: [Track Order]' 
    },
    {
      customer: 'Priya M.',
      question: 'How can I return this item?',
      autoResponse: 'Hey Priya! You can initiate a return via our returns portal here → [Return Portal Link]. We’ve got you covered 💫' 
    },
    {
      customer: 'Rahul S.',
      question: 'Do you offer COD?',
      autoResponse: 'Hi Rahul! Yes, Cash on Delivery is available in most pin codes across India 🇮🇳. You’ll see the option at checkout!' 
    }
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📞 Customer Care Agent — AI Support Dashboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Customer</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Question</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Auto-Response</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((item, idx) => (
            <tr key={idx}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.customer}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.question}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{item.autoResponse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
