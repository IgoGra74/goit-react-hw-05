import css from "./SearchMovie.module.css";
import toast from "react-hot-toast";

const SearchMovie = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (topic === "") {
      toast.error("Please enter search term!");
      return;
    }
    // onSearchImage(topic);
    form.reset();
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="topic"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;
