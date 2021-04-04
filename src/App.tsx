import React from 'react';
import Container from '@material-ui/core/Container';
import { useGetPlayBetterStock } from './hooks/use-queries';
import Typography from '@material-ui/core/Typography';
import CustomCard from './components/card';

function App() {
  const playBetterResponse = useGetPlayBetterStock();
  if (!playBetterResponse?.product)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <Container>
      <Typography style={{ color: '#ffffff' }} variant='h1' align='center'>
        SkyTrak Listings
      </Typography>

      {playBetterResponse.variants.map((item) => (
        <CustomCard
          item={item}
          vendor={'Play Better'}
          updatedAt={playBetterResponse.product.updated_at}
        ></CustomCard>
      ))}
    </Container>
  );
}

export default App;
