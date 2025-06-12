import './globals.css';
import Layout from './components/navbar/layout';
import { UserProvider } from '@/providers/authProvider';

export const metadata = {
  title: 'Employee Dashboard',
  description: 'This is an employee dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <UserProvider>
      <html lang="en">
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </UserProvider>

  );
}
