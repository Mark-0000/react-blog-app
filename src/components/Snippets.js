const Snippets = () => {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "Mark", age: 21 };
  const link = "http://www.google.com";

  let count = 0;
  const [name, setName] = useState("Mark");
  const [age, setAge] = useState(21);

  const handleClick = (e) => {
    count = count + 1;
    console.log("Hello Ninjas", count, e.target);
  };
  const handleClickAgain = (name) => {
    count = count + 1;
    console.log("Hello", name, count);
    setName("Nine");
    setAge(20);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>Likes {likes} times</p>
      <p>{person.name}</p>
      <p>{10}</p>
      <p>{"Hello World"}</p>
      <p>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Google</a>
      <a
        href="/create"
        style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
        }}
      ></a>

      <h2>HomePage</h2>
      <p>
        {name} is {age} years old!
      </p>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={() => handleClickAgain("Mark")}>Click Again?</button>


      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      /> */}

    </div>
  );
};

export default Snippets;
