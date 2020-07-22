import React from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container>
      { loading && <p>Loading...</p> }
      { error && <p>Error...</p> }
      { jobs && <p>{ jobs.length }</p> }
    </Container>
  );
}

export default App;
