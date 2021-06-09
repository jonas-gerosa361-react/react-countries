export default function Header({ children }) {
  return (
    <header>
      <div className="bg-blue-400 mx-auto p-5">
        <h1 className="text-center font-semibold text-xl">{children}</h1>
      </div>
    </header>
  );
}
