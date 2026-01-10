import SearchInput from "@/components/SearchInput";
import Button from "@/components/ui/Button";

const Help = () => {
  const quickHelpCards = [
    {
      id: 1,
      icon: "",
      label: "Getting Started",
      description:
        "Learn how to navigate Skill Track, create your account, and start your first course.",
      color: "bg-purple-600",
    },
    {
      id: 2,
      icon: "",
      label: "Account & Billing",
      description:
        "Manage your profile, update payment information, and view your subscription plans.",
      color: "bg-blue-400",
    },
    {
      id: 3,
      icon: "",
      label: "Technical Issues",
      description:
        "Troubleshoot common problems, report bugs, and find solutions for platform access.",
      color: "bg-orange-400",
    },
    {
      id: 4,
      icon: "",
      label: "Course Content",
      description:
        "Get help with course materials, assignments, quizzes, and completion certificates.",
      color: "bg-green-300",
    },
  ];
  const contactSupport = [
    {
      id: 1,
      icon: "",
      label: "Email Support",
      button: "Contact",
      address: "support@skilltrack.com",
    },
    {
      id: 2,
      icon: "",
      label: "Live Chat",
      button: "Start Chat",
      address: "Available 24/7",
    },
    {
      id: 3,
      icon: "",
      label: "Phone Support",
      button: "Call Now",
      address: "98-058-2323-718",
    },
  ];
  const popularArticles = [
    {
      id: 1,
      label: "How to enroll in a course",
      description: "",
    },
    {
      id: 2,
      label: "Reset your password",
      description: "",
    },
    {
      id: 3,
      label: "Download xertificates",
      description: "",
    },
    {
      id: 4,
      label: "Manage subscription",
      description: "",
    },
    {
      id: 5,
      label: "Report a problem",
      description: "",
    },
  ];
  const faqSection = [
    {
      id: 1,
      label: "What payment methods do you accept?",
      description: "",
    },
    {
      id: 2,
      label: "How do I cancel my subscription?",
      description: "",
    },
    {
      id: 3,
      label: "How long do I have access to my courses?",
      description: "",
    },
    {
      id: 4,
      label: "Do you offer discounts for students?",
      description: "",
    },
  ];

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-medium">Help & Support</h1>
        <p>How can we help you today?</p>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-2xl">
        <SearchInput
          inputClassName="h-10 text-base"
          placeholder="Search for help articles..."
        />
      </div>

      {/* Quick help cards */}
      <div>
        <h2 className="text-xl font-semibold py-4">QUICK HELP CARDS</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {quickHelpCards.map(({ id, icon, label, description, color }) => {
            const Icon = icon;
            return (
              <li
                key={id}
                className={`flex flex-col gap-2 py-3 px-3 ${color} text-white rounded-md shadow-md`}
              >
                <span>{Icon}</span>
                <h3 className="text-lg font-serif">{label}</h3>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-row gap-5 justify-between">
        {/* POPULAR ARTICLES */}
        <div>
          <h2 className="text-xl font-semibold py-4">POPULAR ARTICLES</h2>
          <ul>
            {popularArticles.map(({ id, label, description }) => (
              <li key={id}>
                <h3 className="text-lg font-serif">{label}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT SUPPORT */}
        <div>
          <h2 className="text-xl font-semibold py-4">CONTACT SUPPORT</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {contactSupport.map(({ id, label, icon, button, address }) => {
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
      </div>

      {/* FAQ section */}
      <div>
        <h2 className="text-xl font-semibold py-4">FAQ SECTION</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {faqSection.map(({ id, label, description }) => (
            <li key={id}>
              <h3 className="text-lg font-serif">{label}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Help;
