import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

export default function SearchBar({onSearch}) {
  const [selectedCondition, setSelectedCondition]= useState("");
  const [selectedPrice, setSelectedPrice]=useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel]= useState("");
  const [selectedLocation, setSelectedLocation] = useState("");


  const makes = [
    {id: "1", name: "Honda"},
    {id: "2", name: "SkyGo"},
    {id: "3", name: "Bajaj"},
    {id: "4", name: "Koremoto"},
    {id: "5", name: "TVS"},
    {id: "6", name: "Yamaha"},
    {id: "7", name: "Hero"},
    {id: "8", name: "Suzuki"},
    {id: "9", name: "kawasaki"},
    {id: "10", name: "KTM"},
    {id: "11", name: "BMW"},
    {id: "12", name: "Lifan"},
    {id: "13", name: "Haujue"},
    {id: "14", name: "Haojin"},
    {id: "15", name: "Captain"},
    {id: "16", name: "Kibo"},
  ];

  const models = {
    "1":['CBR150R','CBR250R','CBR500R','CBR600RR','CBR1000RR Fireblade','african twin','XR150L','XR190CT','CRF250L','CRF450R'],
    "2":[' SG125',' SG150',' SG150-7',' SG150-8',' SG200',' SG200-27',' SG250',' SG250-5','Skygo Star','Skygo Pony'],
    "3":['Boxer 100','Boxer 150','Pulsar 150','Pulsar 180','Pulsar NS200','Platina 100','Platina 110'],
    "4":['KM125','KM150','KM200','KM250','KMX150','KMX200','KMX250','KME125','KME150'],
    "5":['Apache RTR 160','Apache RTR 200 4V','Star City Plus','tar HLX 125','Ntorq 125','Jupiter'],
    "6":['YZF-R15','YZF-R3','YZF-R6','YZF-R1','MT-03','MT-07','MT-09','MT-10','FZ150','FZ25','XTZ125','XTZ250'],
    "7":['Splendor Plus','Super Splendor','Xtreme 160R','Xtreme 200S','HF Deluxe'],
    "8":['GSX-R150','GSX-R600','GSX-R750','GSX-R1000','Gixxer 150','Gixxer SF 250','DR-Z125','DR-Z400'],
    "9":['Ninja 250','Ninja 400','Ninja 650','Ninja ZX-6R','Ninja ZX-10R','Z125','Z400','Z650','Z900','Versys-X 300','Versys 650','Versys 1000',],
    "10":['125 Duke','200 Duke','390 Duke','RC 125','RC 200','RC 390','390 Adventure','790 Adventure'],
    "11":['G 310 R','G 310 GS','F 750 GS','F 850 GS','R 1250 GS','R 1250 RT','S 1000 RR','S 1000 XR'],
    "12":['LF150','LF250','KP150','KP200','X-Pect 200','KPR 200'],
    "13":['DK150','TZ125','DR160','HJ150','HJ125-8','HJ125-11A','HJ125-11',' HJ150-16','HJ200','HJ110-2'],
    "14":['HJ125-8','HJ125-11','HJ150-30','HJ150-2C',' HJ150-9','HJ150-11','HJ150-18','HJ200-9','HJ125-3','HJ125-7'],
    "15":['CG125','CG150','CG200','HJ125-7','HJ150-5','HJ150-8','HJ150-9','HJ200-3',' HJ125-11','HJ150-18'],
    "16":['K150','K160','K250','K260','K400'],
    "17":['','','','','','','','','','','','','','','','','',''],
    "18":['','','','','','','','','','','','','','','','','',''],
    "19":['','','','','','','','','','','','','','','','','',''],
  };

  const prices = [
    {id: "1", name: "30,000"},
    {id: "2", name: "35,000"},
    {id: "3", name: "40,000"},
    {id: "4", name: "45,000"},
    {id: "5", name: "50,000"},
    {id: "6", name: "55,000"},
    {id: "7", name: "60,000"},
    {id: "8", name: "65,000"},
    {id: "9", name: "70,000"},
    {id: "10", name: "75,000"},
    {id: "11", name: "80,000"},
    {id: "12", name: "85,000"},
    {id: "13", name: "90,000"},
    {id: "14", name: "95,000"},
    {id: "15", name: "100,000"},
    {id: "16", name: "105,000"},
    {id: "9", name: "110,000"},
    {id: "10", name: "115,000"},
    {id: "11", name: "120,000"},
    {id: "12", name: "125,000"},
    {id: "13", name: "130,000"},
    {id: "14", name: "135,000"},
    {id: "15", name: "140,000"},
    {id: "16", name: "145,000"},
    {id: "9", name: "150,000"},
    {id: "10", name: "155,000"},
    {id: "11", name: "160,000"},
    {id: "12", name: "165,000"},
    {id: "13", name: "170,000"},
    {id: "14", name: "175,000"},
    {id: "15", name: "180,000"},
    {id: "16", name: "185,000"},
    {id: "12", name: "190,000"},
    {id: "13", name: "195,000"},
    {id: "14", name: "200,000"},
    {id: "15", name: "210,000"},
    {id: "16", name: "220,000"},
  ];

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
    setSelectedModel("");
  }

  const handleSearch = () => {
    onSearch(`${selectedCondition, selectedMake, selectedPrice,selectedModel, selectedLocation}`);
  }


  return(
    <div className="space-y-2 bg-gray-200 rounded-sm p-4">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
        <select
        value={selectedCondition}
        onChange={(e)=> {setSelectedCondition(e.target.value)}}
        className="p-4  rounded"
        >
          <option>New or Used</option>
          <option>New</option>
          <option>Used</option>
        </select>

        <select
          value={selectedMake}
          onChange={handleMakeChange}
          className="p-4  rounded"
        >
          <option value="">Select Make</option>
          {makes.map((make)=> (
            <option key={make.id} value={make.id}>{make.name}</option>
          ))}
        </select>

      <select 
      value={selectedModel}
      onChange={(e)=> setSelectedModel(e.target.value)}
      disabled={!selectedMake}
      className="p-4  rounded"
      >
        <option value="">Select Model</option>
        {selectedMake && models[selectedMake].map((model)=> (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>

        <select
        value={selectedPrice}
        onChange={(e)=> setSelectedPrice(e.target.value)}
        className="p-4  rounded"
        >
          <option value="">Choose Price</option>
          {prices.map((price) => (
            <option key={price.id} value={price.id}>{price.name}</option>
          ))}
        </select>
 
      <input
      type="text"
      value={selectedLocation}
      onChange={(e)=> setSelectedLocation(e.target.value)}
      className="p-4  rounded"
      placeholder="Enter Location"
      />

      <button
       className=" p-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
       onClick={handleSearch}
       >
        Search
      </button>
      </div>
    </div>
  );
}
