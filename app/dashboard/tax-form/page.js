import Sidebar from "../../../components/Dashboard/sidebar";
import Image from "next/image";
import card from "../../../assets/card.png";

export default function TaxPage() {
  return (
    <div className=" mx-auto">
      <div className=" grid grid-cols-12">
        <div className=" col-span-2">
          <Sidebar />
        </div>
        <div className=" col-span-10">
          <div className=" my-16">
            <Image src={card} width={50} height={50} className=" mx-auto" />
            <h2 className=" text-center text-[22px]">
              Welcome, this is your last filled{" "}
              <span className=" font-bold">Personal Information</span>
            </h2>
            <p className=" text-center text-[14px]">
              you can update your information for this year
            </p>
          </div>

          <form>
            <div className=" mx-auto mb-4 flex max-w-4xl items-center justify-center">
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter full name"
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
              <input
                type="date"
                id="full-name"
                name="full-name"
                placeholder="Your date of birth"
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="CNIC No"
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
            </div>

            <div className=" mx-auto flex max-w-4xl items-center justify-center">
              <select
                type="text"
                id="occupation"
                name="occupation"
                placeholder="Occupation"
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              >
                <option>Corporate Section</option>
                <option>Federal Govt.</option>
                <option>Provincial Govt</option>
                <option>Research / Teacher</option>
                <option>Other</option>
              </select>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Mobile Number"
                className="border-gray-300 focus:ring-blue-500 mx-2 w-full rounded-sm border px-3 py-2 focus:outline-none focus:ring-2"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
