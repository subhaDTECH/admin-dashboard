import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiAdvertisementFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { GrApps } from "react-icons/gr";
import { FaBolt } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Admin = () => (
  <section className="bg-gray-100 flex ">
    <aside className="bg-gray-800 z-10 text-white w-64 min-h-screen p-4 hidden md:block">
      <nav>
        <ul className="space-y-2">
          <li className="opcion-con-desplegable">
            <div className=" p-2 hover:bg-gray-700">
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <p className="text-[16px]">Nishyan</p>
                  <p className="text-sm underline">Visit Store</p>
                </div>
                <IoIosArrowDropdownCircle />
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <FaHome />
                <span className="mx-4">Home</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <FaBorderAll />
                <span className="mx-4">Orders</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <MdProductionQuantityLimits />
                <span className="mx-4">Products</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <CiDeliveryTruck />
                <span className="mx-4">Delivery</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <RiAdvertisementFill />
                <span className="mx-4">Marketing</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <SiSimpleanalytics />
                <span className="mx-4">Analytics</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <CiDiscount1 />
                <span className="mx-4">Payouts</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <CiDiscount1 />
                <span className="mx-4">Discounts</span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <IoIosPeople />
                <span className="mx-4">Audience </span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <GrApps />
                <span className="mx-4">Appearance </span>
              </div>
            </div>
          </li>

          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <div className="flex items-center">
                <FaBolt />
                <span className="mx-4">plugins </span>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div className="bottom-0 left-0 bg-gray-400 mt-[50px] p-2 text-white rounded-sm">
        <p>available credits</p>
        <p>2344.9</p>
      </div>
    </aside>
    <section className="body-conatiner flex  flex-col  w-full">
      {/* nav part  */}
      <nav className="flex justify-between bg-gray-200 h-[8vh] w-full">
        <div className="box-1 flex items-center mx-3 flex-wrap">
          <p className="text-[20px] mx-2">Payouts</p>
          <p className="text-sm mx-2">How it works</p>
        </div>

        <div className="box-2 flex items-center w-[70%] mx-auto  text-center">
          <div class="relative max-w-md w-full mx-3 items-center mx-auto">
            <div class="absolute top-1 left-2 inline-flex items-center p-2">
              <CiSearch size={"20px"} />
            </div>
            <input
              class="w-full items-center mx-auto h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-sm focus:shadow-outline"
              type="search"
              placeholder="Buscar..."
            />
          </div>
        </div>

        <div className="box-3 mx-3 flex items-center">
          <RiAdvertisementFill className="mx-3" size={"20px"} />
          <IoIosArrowDropdownCircle className="mx-3" size={"20px"} />
        </div>
      </nav>
      {/* nav part end */}

      {/* overview part  */}

      <div className="mx-5 py-2 flex flex-row  justify-between ">
        <h3 className="text-[18px] font-bold mx-3 ">Overview</h3>
        <div className="flex items-center justify-center bg-white">
          <button className="mx-2 bg-white p-4">This Month</button>{" "}
          <IoIosArrowDropdownCircle className="mx-2" />
        </div>
      </div>

      {/* overview part end  */}

      {/* box part  */}

      <div className="grid grid-col-2 md:grid-cols-3 gap-4 mx-3 ">
        <div className="bg-white flex flex-col  p-4 mx-3">
          <p className="text-[18px] ">Next Payouts</p>
          <p className="text-[20px]">$7083</p>
          <p className="text-sm ">Next payout Date Today , 04.00pm</p>
          <p className="text-sm underline text-blue-300">View 13 Orders</p>
        </div>

        <div className="bg-white flex flex-col  p-4 mx-3">
          <p className="text-[18px] ">Amount Process</p>
          <p className="text-[20px] py-2">$7083</p>
          <p className="text-sm ">Next payout Date Today , 04.00pm</p>
          <p className="text-sm underline text-blue-300">View 13 Orders</p>
        </div>

        <div className="bg-white flex flex-col  p-4 mx-3">
          <p className="text-[18px]">Next Payouts</p>
          <p className="text-[20px] py-2">$7083</p>
          <p className="text-sm ">Next payout Date Today , 04.00pm</p>
          <p className="text-sm underline text-blue-300">View 13 Orders</p>
        </div>
      </div>
      {/* box part end  */}

      {/* Transactions button part  */}

      <div className="flex flex-col my-2 mx-5 py-4">
        <p className="text-[20px]"> Transactions | This month</p>
        <div className="flex flex-row items-center">
          <button className="px-4 py-2 bg-gray-400  my-2 rounded-full ">
            Payouts(20)
          </button>
          <button className="px-4  py-2 bg-blue-400  my-2  rounded-full ml-4">
            Refunds (30)
          </button>
        </div>
      </div>

      {/* Transactions part end  */}

      {/* table part  */}

      <div className="table bg-white overflow-hidden">
        <div className="box-2 flex items-center p-5">
          <div class="relative max-w-md w-full">
            <div class="absolute top-1 left-2 inline-flex items-center p-2">
              <CiSearch size={"20px"} />
            </div>
            <input
              class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-sm focus:shadow-outline"
              type="search"
              placeholder="transication Id or Order Id"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm">
                  <thead class="border-b font-medium">
                    <tr>
                      <th scope="col" class="px-6 py-2">
                        Order Id
                      </th>
                      <th scope="col" class="px-6 py-2">
                        Status
                      </th>
                      <th scope="col" class="px-6 py-2">
                        Transaction ID
                      </th>
                      <th scope="col" class="px-6 py-2">
                        Refund date
                      </th>
                      <th scope="col" class="px-6 py-2">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b transition duration-300 ease-in-out ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        #281209
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 flex items-center">
                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                        <span className="px-2"> Sucessfull</span>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">12345678</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        Today , 04:45 Pm
                      </td>

                      <td class="whitespace-nowrap px-6 py-4">$12233</td>
                    </tr>

                    <tr class="border-b transition duration-300 ease-in-out ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        #281209
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 flex items-center">
                        <div className="w-[10px] h-[10px] bg-gray-400 rounded-full"></div>
                        <span className="px-2">Processing</span>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">12345678</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        Today , 04:45 Pm
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">$12233</td>
                    </tr>

                    <tr class="border-b transition duration-300 ease-in-out ">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        #281209
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 flex items-center">
                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                        <span className="px-2"> Sucessfull</span>
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">12345678</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        Today , 04:45 Pm
                      </td>

                      <td class="whitespace-nowrap px-6 py-4">$12233</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table part end  */}
    </section>
  </section>
);

export default Admin;
