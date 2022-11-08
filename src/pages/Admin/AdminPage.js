import "./AdminPage.css";
import Navbar from "../../components/Navbar/Navbar";
import TableComponent from "../../components/Table/TableComponent";

import useAdmin from "../../utils/useAdmin";

function AdminPage() {
    const {SessionPage} = useAdmin();
    
    SessionPage()
    return (
        <div>
            <Navbar />
            <div className="p-5">
                <TableComponent />
            </div>
        </div>
    )
}

export default AdminPage;