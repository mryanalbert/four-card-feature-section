const Card = ({ classValue, cardTitle, icon, children }) => {
  return (
    <div className={`${classValue} px-8 py-6`}>
      <h1 className="font-semibold text-lg text-zinc-800 mb-2">{cardTitle}</h1>
      <p className="text-xs text-zinc-400">{children}</p>
      <img src={icon} className="block ms-auto mt-12" alt="" />
    </div>
  );
};
export default Card;
