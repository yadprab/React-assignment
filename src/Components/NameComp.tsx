const NameComp = ({ name, email }: { name: string; email: string }) => {
  return (
    <div className="name--area">
      <p id="name">{name}</p>
      <p id="email">{email}</p>
    </div>
  );
};
export { NameComp };
