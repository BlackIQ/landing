import { ProductPageShell } from "@/components/product-page-shell";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <ProductPageShell accent="#3B82F6">{children}</ProductPageShell>;
}
