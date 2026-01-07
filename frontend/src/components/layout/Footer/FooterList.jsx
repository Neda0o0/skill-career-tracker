const FooterList = ({ children, title }) => {
  return (
    <div className="px-2 w-full md:w-auto">
      {title && (
        <h4 className="mb-3 text-sm font-semibold text-gray-400 uppercase text-center md:text-left">
          {title}
        </h4>
      )}

      <ul className="flex flex-col gap-2 text-gray-200 items-center md:items-start">
        {children}
      </ul>
    </div>
  );
};

export default FooterList;
