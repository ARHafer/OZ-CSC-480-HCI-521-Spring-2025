import QuoteCard from "../components/QuoteCard";

const QuoteList = ({ topQuotes, loading, error }) => {
  return (
    <div style={{ padding: "40px", margin: "auto", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ alignSelf: "flex-start", marginLeft: "40px" }}>Top Quotes</h1>
      <div className="d-flex w-100" style={{ gap: "40px",  selfAlign:"center"}}>
        {loading ? (
          <p className="text-center w-100">Loading quotes...</p>
        ) : error ? (
          <p className="text-center w-100">{error}</p>
        ) : topQuotes.length > 0 ? (
          topQuotes.map((quote) => <QuoteCard key={quote._id} quote={quote} />)
        ) : (
          <p className="text-center w-100">No quotes found.</p>
        )}
      </div>
    </div>
  );
};

export default QuoteList;
