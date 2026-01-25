import Button from "@/components/ui/Button";

const ContactSupport = ({ items }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold py-4">CONTACT SUPPORT</h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {items.map(({ id, label, icon, button, address }) => {
          const Icon = icon;

          return (
            <li
              key={id}
              className="flex flex-col gap-2 py-3 px-3 rounded-md shadow-md"
            >
              <span>{Icon}</span>
              <h3 className="text-lg font-serif">{label}</h3>
              <p>{address}</p>
              <Button>{button}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactSupport;
