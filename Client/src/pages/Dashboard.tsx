import AddProducts from "../components/addproducts/AddProducts";
import AdminNavbar from "../components/adminnavbar/AdminNavbar";
import backgroundImage from "../assets/images/BgLogin.svg";

const Dashboard = () => {
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
            <AdminNavbar />
            <h1 className="text-center text-3xl font-bold my-10">PRODUCTS LIST</h1>
            <p className="text-center my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores cumque explicabo nobis laboriosam. Aliquid maiores doloremque, consequatur eveniet beatae doloribus alias quisquam cupiditate nemo, quis quae, esse atque soluta!</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <AddProducts />
            {/* IMPORT PRODUCT CARDS */}
        </div>
    );
};

export default Dashboard;
