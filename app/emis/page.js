import ProductDetail from "../../components/ProductDetail";
import { emis } from "../../lib/products";

export const metadata = { title: "EduRole EMIS — Ministries & Regulators" };
export default function EmisPage() { return <ProductDetail product={emis} />; }
