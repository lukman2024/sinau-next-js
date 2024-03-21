import Navbar from "../Navbar";

const AppShell = (props) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;
