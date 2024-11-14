// import React from 'react';
// import { Check, Clock, NotebookText, X, Menu } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetClose
// } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const sections = [
//     {
//       title: "MVP",
//       description: "Generate invoice, Download PDF",
//       icon: <Check className="w-5 h-5 text-green-500" />,
//       active: true
//     },
//     {
//       title: "Dashboard",
//       description: "Links, Track, reports, widgets etc",
//       icon: <Clock className="w-5 h-5 text-gray-400" />,
//       active: false
//     },
//     {
//       title: "Notes",
//       description: "Record and document.",
//       icon: <NotebookText className="w-5 h-5 text-gray-400" />,
//       active: false
//     }
//   ];

//   return (
//     <header className="border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <span className="text-xl font-bold">monivoice</span>
//             <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">BETA</span>
//           </div>

//           {/* Sheet Trigger - Both Mobile & Desktop */}
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="top" className="w-full p-0">
//               <div className="flex flex-col w-full">
//                 <div className="flex items-center justify-between border-b">
//                   <div className="flex-1 flex">
//                     {sections.map((section, index) => (
//                       <button
//                         key={section.title}
//                         className={`flex items-start px-6 py-4 hover:bg-gray-50 ${
//                           section.active ? 'border-b-2 border-purple-600' : ''
//                         } ${index !== sections.length - 1 ? 'border-r border-gray-100' : ''}`}
//                       >
//                         <div className="mr-3 mt-1">{section.icon}</div>
//                         <div className="text-left">
//                           <h3 className={`font-medium ${
//                             section.active ? 'text-purple-600' : 'text-gray-900'
//                           }`}>
//                             {section.title}
//                           </h3>
//                           <p className="text-sm text-gray-500 max-w-[200px]">{section.description}</p>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                   <SheetClose className="p-4 hover:bg-gray-50">
//                     <X className="w-5 h-5 text-gray-500" />
//                   </SheetClose>
//                 </div>

//                 {/* Content Area */}
//                 <div className="p-6">
//                   <h2 className="text-lg font-semibold mb-4">Content Area</h2>
//                   <p className="text-gray-600">
//                     This area can be customized based on the selected section.
//                   </p>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Check, Clock, NotebookText, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      title: "MVP",
      description: "Generate invoice, Download PDF",
      icon: <Check className="w-2 h-2 text-green-500" />,
      active: true
    },
    {
      title: "Dashboard",
      description: "Links, Track, reports, widgets etc",
      icon: <Clock className="w-2 h-2 text-gray-400" />,
      active: false
    },
    {
      title: "Notes",
      description: "Record and document.",
      icon: <NotebookText className="w-2 h-2 text-gray-400" />,
      active: false
    }
  ];

  return (
    <>
      <header className="border-b bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold">monivoice</span>
                <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded">BETA</span>
              </div>
            </div>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Dropdown Panel */}
      <div className={`fixed top-0 left-0 right-0 bg-slate-100 transform transition-transform duration-300 ease-in-out z-50  ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="w-full border-b">
          <div className="container mx-auto">
            <div className="flex items-stretch justify-between relative">
              <div className="flex-1 flex divide-x">
                {sections.map((section) => (
                  <button
                    key={section.title}
                    className={`flex items-start px-6 py-4 hover:bg-gray-50 flex-1 ${
                      section.active ? 'border-b-2 border-b-green-500' : ''
                    }`}
                  >
                    <div className="mr-3 mt-1">{section.icon}</div>
                    <div className="text-left">
                      <h3 className={`text-sm font-medium ${
                        section.active ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-500">{section.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-4 hover:bg-gray-50 absolute right-0 top-0"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;