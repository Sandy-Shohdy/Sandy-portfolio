interface DecorativeBackgroundProps {
  variant?: "default" | "inverted" | "minimal";
}

export default function DecorativeBackground({
  variant = "default",
}: DecorativeBackgroundProps) {
  return (
    <>
      {variant === "default" && (
        <>
          <div className="decorative-bg decoration-1"></div>
          <div className="decorative-bg decoration-2"></div>
        </>
      )}
      {variant === "inverted" && (
        <>
          <div className="decorative-bg decoration-3"></div>
          <div className="decorative-bg decoration-4"></div>
        </>
      )}
      {variant === "minimal" && (
        <>
          <div className="decorative-bg decoration-5"></div>
        </>
      )}
    </>
  );
}
// 