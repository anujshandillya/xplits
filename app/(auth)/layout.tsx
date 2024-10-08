const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex-center min-h-screen bg-main bg-cover bg-no-repeat">
        {children}
      </div>
    )
  }
  
  export default Layout