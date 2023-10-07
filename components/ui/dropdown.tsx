import { BookCopy, PhoneCall, Verified, Video } from "lucide-react";

const DropDown = () => {
  return (
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        <a
          href="#"
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
        >
          <PhoneCall className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">Contact Us</p>
            <p className="mt-1 text-sm text-gray-500">
              Get all of your questions answered on contact support.
            </p>
          </div>
        </a>
        <a
          href="#"
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
        >
          <BookCopy className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">Blogs</p>
            <p className="mt-1 text-sm text-gray-500">
              Read stories and blogs of our customers
            </p>
          </div>
        </a>
        <a
          href="#"
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
        >
          <Video className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">
              Tifola Tutorial
            </p>
            <p className="mt-1 text-sm text-gray-500">
              See tutorial videos of how to book your daily tiffin on mobile
              app.
            </p>
          </div>
        </a>
        <a
          href="#"
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
        >
          <Verified className="flex-shrink-0 h-6 w-6 text-amber-500" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">Pincode</p>
            <p className="mt-1 text-sm text-gray-500">
              Search if we serve at your location.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DropDown;
