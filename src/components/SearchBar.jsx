import {Search} from "lucide-react"
import InputField from "./ui/InputField"

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <InputField 
      type="search" 
      placeholder="Phones, laptops,..." 
      className="bg-[#D9D9D9] border border-[#375A88] rounded-2xl px-4 outline-none bg-opacity-10 text-white mr-[-35px] w-full pr-10" />

      <Search 
      className="text-white opacity-90 cursor-pointer hover:scale-110 active:scale-100" />
    </div>
  );
};

export default SearchBar;