const Feature = ({ description }) => {
  return (
    <div className="flex justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
      <span className="ml-1 text-sm capitalize">{description}</span>
    </div>
  );
};

export default Feature;
