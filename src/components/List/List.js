import { TodoCard } from "../TodoCard/TodoCard";

function List({ list, handleDone, handleDelete, search, searchInput, arrNew }) {
  return (
    <>
      {searchInput.search === ""
        ? list.map((todo, index) => (
            <TodoCard
              key={index}
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          ))
        : searchInput.arrNew.map((todo, index) => (
            <TodoCard
              key={index}
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          ))}
    </>
  );
}

export default List;
