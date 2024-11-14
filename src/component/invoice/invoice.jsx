import React, { useState } from 'react';

const InvoiceTemplate = () => {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 100));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 50));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Zoom Controls */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col bg-gray-800 rounded-lg p-2 text-white">
        <button 
          className="p-2 hover:bg-gray-700 rounded-md transition-colors"
          onClick={handleZoomIn}
        > 
          <svg className="w-5 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" strokeLinecap="round"/>
          </svg>
        </button>
        <button 
          className="p-2 hover:bg-gray-700 rounded-md transition-colors"
          onClick={handleZoomOut}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM7 10h6" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8" 
             style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}>
          {/* Preview Banner */}
          <div className="flex gap-2 mb-6">
            <span className="bg-gray-800 text-white px-4  py-1 rounded-r-xl  ml-[90px] font-thin text-xs">PREVIEW</span>
            <span className="bg-cyan-400 text-white px-4 py-1 rounded-r-xl font-thin text-xs">TEMPLATE 001</span>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;



// Invoice Header
//           <div className="flex justify-between items-start mb-12">
//             <h1 className="text-6xl font-bold tracking-tight">Invoice</h1>
//             <div className="bg-gray-800 p-3 rounded-lg">
//               <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"/>
//               </svg>
//             </div>
//           </div>

//           {/* Invoice Details */}
//           <div className="grid grid-cols-2 gap-x-16 gap-y-8 mb-12">
//             <div>
//               <h3 className="text-gray-800 font-medium mb-2">Invoice date</h3>
//               <p className="text-gray-600">14 / 11 / 2024</p>
//             </div>
//             <div>
//               <h3 className="text-gray-800 font-medium mb-2">Due date</h3>
//               <p className="text-gray-600">14 / 11 / 2024</p>
//             </div>
//             <div>
//               <h3 className="text-gray-800 font-medium mb-2">From</h3>
//               <div className="h-12 bg-gray-50 rounded-md border border-gray-200"></div>
//             </div>
//             <div>
//               <h3 className="text-gray-800 font-medium mb-2">To</h3>
//               <div className="h-12 bg-gray-50 rounded-md border border-gray-200"></div>
//             </div>
//           </div>

//           {/* Invoice Number */}
//           <div className="flex justify-end gap-8 mb-12">
//             <div>
//               <h3 className="text-gray-800 font-medium mb-2">PO no</h3>
//               <div className="h-8 w-32 bg-gray-50 rounded-md border border-gray-200"></div>
//             </div>
//             <div>
//               <h3 className="text-gray-800 font-medium mb-2">Invoice no</h3>
//               <p className="text-gray-600">#MONI-220</p>
//             </div>
//           </div>

//           {/* Items Table */}
//           <table className="w-full mb-12">
//             <thead>
//               <tr className="text-left">
//                 <th className="pb-4 font-medium">Item</th>
//                 <th className="pb-4 font-medium">Quantity</th>
//                 <th className="pb-4 font-medium">Unit Price</th>
//                 <th className="pb-4 font-medium text-right">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2">
//                   <div className="h-8 bg-gray-50 rounded-md border border-gray-200"></div>
//                 </td>
//                 <td className="py-2">
//                   <div className="h-8 w-24 bg-gray-50 rounded-md border border-gray-200"></div>
//                 </td>
//                 <td className="py-2">
//                   <div className="h-8 w-24 bg-gray-50 rounded-md border border-gray-200"></div>
//                 </td>
//                 <td className="py-2">
//                   <div className="h-8 w-24 bg-gray-50 rounded-md border border-gray-200 ml-auto"></div>
//                 </td>
//               </tr>
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td colSpan="3" className="pt-4 text-right font-medium">Subtotal</td>
//                 <td className="pt-4">
//                   <div className="h-8 w-24 bg-gray-50 rounded-md border border-gray-200 ml-auto"></div>
//                 </td>
//               </tr>
//               <tr>
//                 <td colSpan="3" className="pt-4 text-right font-medium">Total Amount Due</td>
//                 <td className="pt-4">
//                   <div className="h-8 w-24 bg-gray-50 rounded-md border border-gray-200 ml-auto"></div>
//                 </td>
//               </tr>
//             </tfoot>
//           </table>

//           {/* Payment Memo */}
//           <div className="mb-12">
//             <h3 className="text-gray-800 font-medium mb-2">Payment Memo</h3>
//             <div className="h-24 bg-gray-50 rounded-md border border-gray-200"></div>
//           </div>

//           {/* Footer */}
//           <div className="flex justify-between text-sm text-gray-600">
//             <span>monInvoice</span>
//             <span>www.moninvoice.com</span>
//           </div>