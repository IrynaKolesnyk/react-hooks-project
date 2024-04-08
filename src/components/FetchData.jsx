import { useFetch } from "../hooks/useFetch";

const FetchData = () => {
  const { data, isLoading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handleRefetch = () => {
    refetch({ params: { _limit: 3 } });
  };

  return (
    <div>
      <div>
        <button onClick={handleRefetch}>Refetch data</button>
      </div>
      {isLoading && "Loading..."}
      {error && "Something went wrong"}
      {data && !isLoading && (
        <ol>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default FetchData;
