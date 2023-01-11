import "./App.css";
import Header from "./plain components/header";
import Footer from "./plain components/footer";
import { addCategory } from "./smart components/listSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectListCount } from "./smart components/listSlice";
import DisplayAllItems from "./smart components/category/category";
import TotalCount from "./plain components/totalcount";
import AddItemForm from "./smart components/AddItem/addItemForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("api/categories")
      .then((data) => data.json())
      .then((categories) => {
        categories.forEach((categoryItem) => {
          dispatch(addCategory(categoryItem.name));
        });
      })
      .catch((e) => {
        console.log(e);
        [
          { id: 1, name: "שוקולד" },
          { id: 2, name: "מנטה" },
          { id: 3, name: "מסטיק" },
        ].forEach((element) => {
          dispatch(addCategory(element.name));
        });
      });
  });
  const count = useSelector(selectListCount);

  return (
    <div className="App">
      <Header></Header>
      <main className="p-4 bg-primary-subtle">
        <TotalCount itemsCount={count} />
        <AddItemForm />
        <DisplayAllItems />
      </main>
      <Footer />
    </div>
  );
}

export default App;
