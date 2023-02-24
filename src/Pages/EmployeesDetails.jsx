import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Pages/Toggle.css";
const EmployeesDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [Toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [name, setname] = useState();
  const [Age, setage] = useState();
  const [Designation, setdes] = useState();
  function idData() {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    idData();
  }, []);
  console.log(data);

  const editData = () => {
    const obj = {
      name,
      Age,
      Designation,
    };
    // console.log(obj);
    axios
      .patch(`http://localhost:8080/posts/${id}`, obj)
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));

      setToggle(!Toggle)
  };
  return (
    <div className="pparentInThatSon">
      <h1> Employees Details</h1>
      <div className="container">
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                No
              </a>
            </div>
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                Name
              </a>
            </div>
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                Age
              </a>
            </div>
            <div className="header__item">
              <a id="name" className="filter__link" href="#">
                Designation
              </a>
            </div>

            <div className="header__item">
              <a
                id="draws"
                className="filter__link filter__link--number"
                href="#"
              >
                Edit
              </a>
            </div>
          </div>

          <>
            <div className="table-content">
              <div className="table-row">
                <div className="table-data">{data.id}</div>
                <div className="table-data">{data.name}</div>
                <div className="table-data">{data.Age}</div>
                <div className="table-data">{data.Designation}</div>

                <div className="table-data">
                  <button onClick={() => setToggle(!Toggle)}>Edit</button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>

      {Toggle && (
        <>
          <div className="EditFunctionality">
            <h2>Edit</h2>
            <div className="inputs">
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setname(e.target.value)}
              />
              <input
                type="text"
                placeholder="age"
                onChange={(e) => setage(e.target.value)}
              />
              <input
                type="text"
                placeholder="Designation"
                onChange={(e) => setdes(e.target.value)}
              />
              <button className="sub" onClick={editData}>
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeesDetails;
