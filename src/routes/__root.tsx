import React from "react";
import { Outlet, Link } from "react-router-dom";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout() {
  return (
    <>
      <Helmet>
        <title>Studio Juliana Tavares — Especialista em Cabelos Texturizados</title>
        <meta name="description" content="Studio Juliana Tavares: especialista em cabelos ondulados, cacheados e crespos. Cuidado dedicado para liberar a beleza natural dos seus cachos." />
        <meta name="author" content="Studio Juliana Tavares" />
        <meta property="og:title" content="Studio Juliana Tavares — Especialista em Cabelos Texturizados" />
        <meta property="og:description" content="Studio Juliana Tavares: especialista em cabelos ondulados, cacheados e crespos. Cuidado dedicado para liberar a beleza natural dos seus cachos." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Studio Juliana Tavares — Especialista em Cabelos Texturizados" />
        <meta name="twitter:description" content="Studio Juliana Tavares: especialista em cabelos ondulados, cacheados e crespos. Cuidado dedicado para liberar a beleza natural dos seus cachos." />
        <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f6c05e2-d9bb-4ef9-b842-bed4b5712c5f/id-preview-f0cc63e7--30682b10-3ab3-466f-991a-c1fca1631f6e.lovable.app-1779648331720.png" />
        <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f6c05e2-d9bb-4ef9-b842-bed4b5712c5f/id-preview-f0cc63e7--30682b10-3ab3-466f-991a-c1fca1631f6e.lovable.app-1779648331720.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
        />
      </Helmet>
      <Outlet />
    </>
  );
}

function Helmet({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // This is a simple implementation of helmet for client-side rendering
  }, [children]);

  return null;
}
