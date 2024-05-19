import Button from "@/common/components/elements/Button";
import Stars from "@/common/components/elements/Stars";
import { ProductType } from "@/common/types/product";
import Image from "next/image";

export default function MainDetailProduct({ data }: { data: ProductType }) {
  return (
    <div className="mt-10 flex flex-row justify-center gap-10">
      <Image src={data.image} alt="gambar" width={300} height={300} />
      <div className="flex max-w-xl flex-col">
        <h1 className="mb-2 text-2xl font-semibold">{data.name}</h1>
        <Stars rating={data.rating} />
        <span className="my-3 text-2xl">${data.price}</span>
        <p className="text-justify">{data.description}</p>
        <div className="mt-5 flex flex-row items-baseline gap-5">
          <Button variant="secondary" size="small">
            -
          </Button>
          <span>2</span>
          <Button size="small">+</Button>
          <Button variant="primary">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
