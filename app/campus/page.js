import ProductDetail from "../../components/ProductDetail";
import { campus } from "../../lib/products";

export const metadata = { title: "EduRole Campus — Universities & Colleges" };
export default function CampusPage() { return <ProductDetail product={campus} />; }
