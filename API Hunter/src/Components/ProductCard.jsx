import { Link } from "react-router-dom";

export default function ProductCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td style={{padding:"10px 5px"}}>{id}</td>
            <td>
            <Link style={{textDecoration:"none",color:"green"}} to={`/products/${id}`} data-testid="brand">{brand}</Link>
            </td>
            <td data-testid="category">{category}
            </td>
            <td data-testid="price">{price}
            </td>
                    </tr>
    )
}
