import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Carousel,Upload } from "antd";
import { Button } from "@material-tailwind/react";

const UpLoadImage = ({ prevStep, nextStep }) => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-6",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <div className="p-3 ">
      <h1 className="text-3xl font-bold mb-4 mt-2 ml-3">Upload Image</h1>
      <div className=" flex-row gap-2 grid grid-cols-1 lg:grid-cols-3 ">
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <div className="border p-3 lg:w-[650px] lg:h-[500px] sm:w-[300px] shrink-0 rounded-r-none">
          <h1 className=" text-2xl  font-bold font-sans">Preview</h1>
          <Carousel className="rounded-xl">
            {fileList.map((file) => (
              <div key={file.uid}>
                <img
                  className="h-[440px] w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                  src={file.url}
                  alt={file.name}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="flex flex-row  gap-6 mt-5">
        <Button
          onClick={prevStep}
          variant="gradient"
          className="flex items-center w-[965px]   justify-center gap-2"
        >
          Previous{" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </Button>
        <Button
          onClick={nextStep}
          variant="gradient"
          className="flex items-center w-[965px]  justify-center gap-2"
        >
          Next{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
export default UpLoadImage;

//   return (
//     <div className="p-3 border">
//       <h1 className="text-3xl font-bold mb-4 mt-2 ml-3">Upload Image</h1>
//       <div className="flex gap-2">
//
//           <div style={{ width: "100%", height: "100px" }}>
//             <Upload
//               action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//               listType="picture-card"
//               fileList={fileList}
//               onChange={handleChange}
//               showUploadList={false}
//             >
//               {fileList.length >= 8 ? null : uploadButton}
//             </Upload>
//           </div>
//         </div>
//         <div className="border p-3 w-[600px] h-[600px]">
//           <h1 className="text-2xl font-bold font-sans">Preview</h1>
//           <Carousel>
//             {fileList.map((file) => (
//               <div key={file.uid}>
//                 <img
//                   className="h-[540px] w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
//                   src={file.url}
//                   alt={file.name}
//                 />
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//       <div className="flex flex-row gap-6 mt-5">
//         <Button
//           onClick={prevStep}
//           variant="gradient"
//           className="flex items-center w-[965px] justify-center gap-2"
//         >
//           Previous
//         </Button>
//         <Button
//           onClick={nextStep}
//           variant="gradient"
//           className="flex items-center w-[965px] justify-center gap-2"
//         >
//           Next
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={4}
//             stroke="currentColor"
//             className="h-5 w-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             />
//           </svg>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default UpLoadImage;
