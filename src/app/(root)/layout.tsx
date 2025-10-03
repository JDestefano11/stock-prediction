const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-screen">
    <div className="container mx-auto px-4">{children}</div>
  </main>
);

export default Layout;