import Header from "../../Header";

const HomeLayout = ({ children }) => {
  return (
    <div className="HomeLayout container-sm">
      <Header />
      { children }
    </div>
  )
}

export default HomeLayout;