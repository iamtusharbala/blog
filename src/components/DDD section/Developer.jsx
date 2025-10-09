import "./Developer.css";

function Developer() {
  return (
    <section className="my-5">
      {/* The main heading container */}
      <p
        className="text-center section-heading-ddd mb-0"
        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
      >
        <span className="fs-1 fs-sm-3">
          Developer<span className="dot-red">.</span> Dreamer
          <span className="dot-red">.</span> Coder{" "}
          <span className="ddc-code">&lt;/&gt;</span>
        </span>
      </p>

      <p className="text-center section-text mt-3 fs-5 fs-sm-6">
        I build on ServiceNow — clean code, smart workflows.
      </p>
    </section>
  );
}

export default Developer;
