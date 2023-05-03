import { useState } from "react";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";
import { Modal } from "../../components/Modal/Modal";
import NewButton from "../../components/NewButton/NewButton";
import todoListcss from "./TodoList.module.css";

function TodoList() {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState('all')
  const [list, setList] = useState([
    {
      id: 1,
      title: "Geeks",
      completed: false,
    },
    {
      id: 2,
      title: "ItBootcamp",
      completed: false,
    },
    {
      id: 3,
      title: "Codify Lab",
      completed: false,
    },
  ]);

  const handleShow = () => {
    setState(!state);
  };

  const handleChangeText = (event) => {
    setTitle(event.target.value);
  };
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState({
    search: "",
    arrNew: [],
  });

  const handleSearch = (e) => {
    const answer = list.filter((item) => {
      if (e.target.value === "") return list;
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchInput({
      search: e.target.value,
      arrNew: answer,
    });
  };

  const handleNewAdd = () => {
    setList((prevTodo) => {
      console.log(prevTodo);
      return [...prevTodo, { id: list.length + 1, title: title }];
    });
    setTitle("");
    handleShow();
  };

  const handleDone = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
    list[currentIndex].completed = !list[currentIndex].completed;
    setList([...list]);
  };

  const handleDelete = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
    let a = list.splice(currentIndex, 1);
    setList([...list]);
  };

  const inputFilter = list.filter(i => i.title.trim().toLowerCase().includes(searchInput.search.trim()))


  // const onSelect = ()=>{
  //
  // }


  const filteredSelect = (e) => {
    setFilter(e.target.value)
  }
  let resultFilt
  if (filter === 'all'){
    console.log(1)
    resultFilt = list;
  } else if (filter === 'completed'){
    console.log(2)

    resultFilt = list.filter(i => i.completed)
  }else if (filter === 'notcompleted'){
    console.log(3)

    resultFilt = list.filter(i => !i.completed)
    console.log(resultFilt)
  }else {
    resultFilt = null
  }
  return (
    <div className={todoListcss.wrapper}>
      <select onChange={filteredSelect}>
        <option value="all">All</option>
        <option value="completed">completed</option>
        <option value="notcompleted">notcompleted</option>
      </select>
      <NewButton onClick={handleShow}>Добавить</NewButton>
      <Input
        placeholder={"search"}
        name={"search"}
        onChange={handleSearch}
        value={searchInput.search}
      />
      {state && (
        <Modal handleShow={handleShow}>
          <h2>{title}</h2>
          <Input
            placeholder={"добавить"}
            name={"add"}
            onChange={handleChangeText}
            value={title}
          />
          {/* ////// */}
          <NewButton onClick={handleNewAdd}>Добавить</NewButton>
          <button onClick={handleShow}>close</button>
        </Modal>
      )}
      <List
        search={resultFilt}
        searchInput={searchInput}
        arrNew={searchInput.arrNew}
        handleDone={handleDone}
        list={resultFilt}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default TodoList;
