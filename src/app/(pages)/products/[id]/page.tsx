import { MainLayout } from "@/common/components/layouts/MainLayout";
import DetailProduct from "@/modules/DetailProduct";
export default function DetailProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <MainLayout>
      <DetailProduct params={params.id} />
    </MainLayout>
  );
}
