import { useEffect, useRef, useState } from "react";
import Cuenta from "./Cuenta";
import Pagos from "./Pagos";
import EditPerfil from "./EditPerfil";
import { MdOutlineManageAccounts, MdPayment, MdOutlineAssignmentReturn } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Link from "next/link";

const Sidebar = () => {
  let [whatInfo, setWhatInfo] = useState({
    pago: null,
    edict: null,
    cuenta: true,
  });

  let [cambiarColor, setCambiarColor] = useState("Cuenta");
  const navigation = [
    {
      href: "javascript:void(0)",
      name: "Cuenta",
    },
    {
      href: "javascript:void(0)",
      name: "Editar perfil",
    },
    {
      href: "javascript:void(0)",
      name: "Pagos",
    },
  ];

  return (
    <>
      <nav className=" w-full h-96 border-none  space-y-8 sm:w-80 ">
        <div class="flex flex-col h-full px-4">
          <div className="h-20 flex items-center pl-2">
            <div className="w-full flex items-center gap-x-4">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="block text-white text-sm font-semibold">
                  Alivika tony
                </span>
              </div>
              <div className="relative flex-1 text-right"></div>
            </div>
          </div>
          <div className="overflow-auto">
            <ul className="text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    onClick={() => {
                      item.name === "Editar perfil"
                        ? setWhatInfo({
                            pago: null,
                            edict: true,
                            cuenta: null,
                          })
                        : null;
                      item.name === "Pagos"
                        ? setWhatInfo({
                            pago: true,
                            edict: null,
                            cuenta: null,
                          })
                        : null;

                      item.name === "Cuenta"
                        ? setWhatInfo({
                            pago: null,
                            edict: null,
                            cuenta: true,
                          })
                        : null;

                      setCambiarColor(item.name);
                    }}
                    href={item.href}
                    className={
                      cambiarColor === item.name
                        ? "flex items-center gap-x-2 bg-blue-500 p-2 rounded-lg text-black hover:bg-blue-300 active:bg-gray-100 duration-150"
                        : "flex items-center gap-x-2 p-2 rounded-lg  active:bg-gray-100 duration-150"
                    }
                  >
                    <div
                      className={
                        cambiarColor === item.name
                          ? " text-black  text-lg"
                          : " text-blue-400 text-lg"
                      }
                    >
                      {item.name === "Cuenta" ? (
                        <MdOutlineManageAccounts />
                      ) : null}
                      {item.name === 'Editar perfil' ? <BiEdit/> :  null}
                      {item.name === "Pagos" ? <MdPayment/> : null}
                    </div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-8 mt-5 m-9 flex ">
            
           <Link href="/Home">
           <span className="mt-20 text-lg text-blue-400">
            <MdOutlineAssignmentReturn/></span>
           </Link>
        </div>
      </nav>
      <div className=" w-1/2 h-96 mt-14 ml-40">
        {whatInfo.cuenta === true ? <Cuenta /> : null}
        {whatInfo.pago === true ? <Pagos /> : null}
        {whatInfo.edict === true ? <EditPerfil /> : null}
      </div>
    </>
  );
};

export default Sidebar;
