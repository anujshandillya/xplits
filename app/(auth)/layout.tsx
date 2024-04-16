const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex-center min-h-screen bg-main bg-cover bg-center">
        {children}
      </div>
    )
  }
  
  export default Layout