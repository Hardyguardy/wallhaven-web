const Icon = ({ className, name }) => {
  return (
    <svg className={className}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
