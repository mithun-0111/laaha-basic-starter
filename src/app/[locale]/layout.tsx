import { NextIntlClientProvider, useMessages } from 'next-intl';
import Header from '@/src/components/Header';
import Container from '@/src/components/Container';
import Head from 'next/head';
import '@/src/styles/globals.css';

const RootLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Laila:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <Header />
            <main>
              <Container>{children}</Container>
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
