import React from "react";
import InsertModel from "../Modals/InsertModel";
import "./home.css";
export default function Home() {
  return (
    <div className="example-container">
        <br></br>
      <div className="example-row">
        <div className="example-content-main">
           <button type="button" className="btn btn-primary open-model" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Upload Images
            </button>
            <InsertModel/>
        </div><br></br>
        <div className="example-content-secondary">
        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>

        </div>
      </div>
    </div>





  );
}
