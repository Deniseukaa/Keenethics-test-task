import { BicycleList } from '@admin/components/BicycleList/BicycleList';
import { Statistics } from '@admin/components/Statistics/Statistics';
import { Container } from '@components/container/Container';
import { Divider } from '@components/divider/Divider';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { Form } from '@admin/components/Form/Form';

import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AdminPageProps {}

export const AdminPage: FC<AdminPageProps> = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Container flex>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="no-scrollbar order-2 p-[10px] md:order-1 md:basis-2/4 md:overflow-y-auto">
            <BicycleList />
          </div>
          <div className="flex flex-col p-[10px] md:order-2 md:basis-2/4">
            <Form />
            <Divider />
            <Statistics />
          </div>
        </div>
      </Container>
      <Footer />
      <ToastContainer />
    </div>
  );
};
