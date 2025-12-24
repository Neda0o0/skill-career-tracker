const FooterList = ({ children, title }) => {
  return (
    <div className="m-5">
      {title && (
        <h4 className="mb-3 text-sm font-semibold text-gray-400 uppercase">
          {title}
        </h4>
      )}

      <ul className="flex flex-col gap-2 text-gray-200">{children}</ul>
    </div>
  );
};

export default FooterList;
