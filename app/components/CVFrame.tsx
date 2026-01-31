"use client"

export const CVFrame = () => {
  const cvUrl = "https://cv-phi-flame.vercel.app/";

  const handlePrint = () => {
    window.open(cvUrl, "_blank");
  };

  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "1rem",
        background: "#ffffff",
        margin: "0 auto"
      }}
    >
      <button onClick={handlePrint} style={{ margin: "10px", padding: "10px" }}>
        Open & Print CV
      </button>
      <iframe
        src={cvUrl}
        style={{ width: "100%", flexGrow: 1, border: "none" }}
      />
    </div>
  );
};
