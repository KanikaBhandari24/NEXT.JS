import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5">
      <Image className= "mx-auto" fill={true}
      src="https://i.pinimg.com/736x/de/01/b9/de01b91d46848547ec9b036b18ea2d63.jpg" alt="" />
    </div>
  );
}
