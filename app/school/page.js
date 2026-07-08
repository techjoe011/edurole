import ProductDetail from "../../components/ProductDetail";
import { school } from "../../lib/products";

export const metadata = { title: "EduRole School — Primary & Secondary" };
export default function SchoolPage() { return <ProductDetail product={school} />; }
