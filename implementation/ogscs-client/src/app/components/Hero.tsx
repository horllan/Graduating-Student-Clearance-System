import Image from "next/image";

export default function Hero(){
    return <div className=" ">
      <h1>hero</h1>
      <Image alt="image" src={"/implementation/ogscs-client/public/assets/Screenshot (1).png"} className="" width={100} height={100} />
    </div>
  }