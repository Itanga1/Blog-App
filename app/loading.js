export default function Loading(){
  return ( 
    <div role="status" className=" flex flex-col items-center justify-center gap-3 h-[calc(100vh-170px)]">
      {/* From Uiverse.io by Fresnel11 */}
      <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
   );
}