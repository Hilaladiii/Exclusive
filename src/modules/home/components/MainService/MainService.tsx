import MainServiceDetail from "./MainServiceDetail";

export default function MainService() {
  return (
    <div className="mt-36 flex w-full flex-row items-center justify-center gap-10">
      <MainServiceDetail
        image="delivery.svg"
        title="FREE AND FAST DELIVERY"
        desc="Free delivery for all orders over $140"
      />
      <MainServiceDetail
        image="customerService.svg"
        title="24/7 CUSTOMER SERVICE"
        desc="Friendly 24/7 customer support"
      />
      <MainServiceDetail
        image="moneyGuarantee.svg"
        title="MONEY BACK GUARANTEE"
        desc="We return money within 30 days"
      />
    </div>
  );
}
