import {
  HeartHandshake,
  Home,
  Package,
  PersonStanding,
  Phone,
} from "lucide-react";

const MobileNavElements = () => {
  return (
    <div className="mt-6">
      <nav className="grid gap-y-8">
        <a
          href="#"
          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
        >
          <Home className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <span className="ml-3 text-base font-medium text-gray-900">Home</span>
        </a>
        <a
          href="#"
          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
        >
          <Package className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <span className="ml-3 text-base font-medium text-gray-900">
            Packages
          </span>
        </a>
        <a
          href="#"
          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
        >
          <PersonStanding className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <span className="ml-3 text-base font-medium text-gray-900">
            About
          </span>
        </a>
        <a
          href="#"
          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
        >
          <Phone className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <span className="ml-3 text-base font-medium text-gray-900">
            Contact Us
          </span>
        </a>
        <a
          href="#"
          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
        >
          <HeartHandshake className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <span className="ml-3 text-base font-medium text-gray-900">
            Join Us
          </span>
        </a>
      </nav>
    </div>
  );
};

export default MobileNavElements;
