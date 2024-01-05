import { BicycleCard } from '@admin/components/BicycleCard/BicycleCard';
import { Form } from '@admin/components/Form/Form';
import { Statistics } from '@admin/components/Statistics/Statistics';
import { Container } from '@components/container/Container';
import { Divider } from '@components/divider/Divider';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <Container flex>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="no-scrollbar order-2 md:order-1 md:basis-2/4 md:overflow-y-auto">
              <BicycleCard
                id="1"
                name="das"
                price={34}
                status="Available"
                type="Bike"
              />
              <BicycleCard
                id="1"
                name="das"
                price={34}
                status="Busy"
                type="Bike"
              />
              <BicycleCard
                id="1"
                name="das"
                price={34}
                status="Unavailable"
                type="Bike"
              />
            </div>
            <div className="flex flex-col md:order-2 md:basis-2/4">
              <Form />
              <Divider />
              <Statistics />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
