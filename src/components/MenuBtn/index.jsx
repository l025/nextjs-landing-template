export const MenuBtn = ({ children }) => {
  return (
    <div className="group relative cursor-pointer">
      <span className="block transition-transform duration-500 group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 translate-y-[120%] transition-transform duration-500 group-hover:translate-y-[0]">
        {children}
      </span>
    </div>
  );
};
