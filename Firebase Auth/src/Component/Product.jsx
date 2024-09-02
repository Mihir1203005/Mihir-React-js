import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDebounce } from './useDebounce';
import { IoSearch } from "react-icons/io5";
const Product = () => {
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(1);
    const [categoryOption, setCategoryOption] = useState(null);
    const [order, setOrder] = useState(null);
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 1000); // Delay of 500ms

    const getDataFunction = () => {
        axios.get('http://localhost:3000/product', {
            params: {
                _page: page,
                _limit: 5,
                category: categoryOption,
                _sort: 'price',
                _order: order,
                q: debouncedSearch,
            },
        })
        .then((res) => setdata(res.data))
        .catch((err) => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/product/${id}`)
            .then((res) => {
                alert('Data Deleted');
                getDataFunction();
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getDataFunction();
    }, [page, categoryOption, order, debouncedSearch]);

    return (
        <div style={{ padding: '0 20px' }}>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "20px"}}>
            <div>
                <select 
                    name="" 
                    id="" 
                    onChange={(e) => setCategoryOption(e.target.value)}
                    style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                >
                    <option value="">Select Your Category</option>
                    <option value="men's clothing">Men's</option>
                    <option value="women's clothing">Women's</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                    type="text"
                    placeholder='Search Here'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <label htmlFor="">
                    <IoSearch />
                </label>
            </div>
            <div>
                <button 
                    onClick={() => setOrder("asc")}
                    style={{ padding: "10px 20px", margin: "0 5px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}
                >
                    LowToHigh
                </button>
                <button 
                    onClick={() => setOrder("desc")}
                    style={{ padding: "10px 20px", margin: "0 5px", borderRadius: "5px", backgroundColor: "#f44336", color: "#fff", border: "none", cursor: "pointer" }}
                >
                    HighToLow
                </button>
            </div>
        </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: '20px' }}>
                {data.map((el) => (
                    <div className='boxpage' key={el.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                        <h3>{el.category}</h3>
                        <Link to={`/singlepage/${el.id}`} style={{ color: "black", textDecoration: 'none' }}>
                            <img src={el.image} alt="" height={200} width={200} style={{ borderRadius: '10px' }} />
                        </Link>
                        <h4>{el.title}</h4>
                        <h4>Price: {el.price}</h4>
                        <button style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
                            <Link to={`/edit/${el.id}`} style={{ color: 'white', textDecoration: 'none' }}>Edit</Link>
                        </button>
                        <button onClick={() => handleDelete(el.id)} style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <button 
                    style={{ fontWeight: "600", padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#2196F3', color: 'white', cursor: 'pointer', marginRight: '10px' }}
                    disabled={page === 1} 
                    onClick={() => setPage(page - 1)}>
                    Pre
                </button>
                <span style={{ fontSize: "20px", fontWeight: "600" }}> {page} </span>
                <button 
                    style={{ fontWeight: "600", padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#2196F3', color: 'white', cursor: 'pointer', marginLeft: '10px' }}
                    disabled={page === 4}
                    onClick={() => setPage(page + 1)}>
                    Next
                </button>
                
            </div>
        </div>
    );
};

export default Product;

