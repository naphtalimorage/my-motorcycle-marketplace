"use client";
// import Image from "next/image";

// export default function Bike({
//   bikephoto,
//   bikename,
//   biketype,
//   bikeengineCapacity,
//   bikespeedLimit,
//   bikefuelType,
//   bikefuelCapacity,
//   bikeprice,
// }) {
//   return (
//     <div className="w-80 h-3/4 mb-5  bg-white">
//       <Image src={bikephoto} alt={bikename} width={320} height={320} priority/>
//       <h2 className="text-xl font-bold">{bikename}</h2>
//       <p>Type: {biketype}</p>
//       <p>Engine Capacity: {bikeengineCapacity}</p>
//       <p>Speed Limit: {bikespeedLimit}</p>
//       <p>Fuel Type: {bikefuelType}</p>
//       <p>Fuel Capacity: {bikefuelCapacity}</p>
//       <p>Price: ${bikeprice}</p>
//     </div>
//   );
// }

import Image from "next/image";
import CarouselDefault from "../carousel/carousel";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function BikeCard() {
  return (
    <Link href="">
      <Card className="w-54 h-[420px] shadow-lg mt-4 ">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-[200px] w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              Apple AirPods
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              $95.00
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-green-600 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Available
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
