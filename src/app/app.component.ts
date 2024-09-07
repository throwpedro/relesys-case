import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'relesys-case';
  goodSnippet = `
          import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('ERROR');
        }
        const result = await response.json();
        if (isMounted) {
          setData(result); // Only set data if the component is still mounted
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message); // Only set error if the component is still mounted
        }
      } finally {
        if (isMounted) {
          setLoading(false); // Only set loading to false if the component is still mounted
        }
      }
    };

    fetchData();

    // Cleanup function to avoid memory leaks or stale data updates
    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, []); // Empty dependency array means the effect runs only once after initial render

  // Render the UI based on the state
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data && data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;`;
}
