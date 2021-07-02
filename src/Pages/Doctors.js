import React from "react";
import ChildPage from "./DocPWrapper.js";
import { useState, useEffect } from "react";
import axios from "axios";
import fetchUrl from "../fetchURL";
function Doctors() {
  const [tableData, settableData] = useState({
    data: [],
    columns: [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Department",
        dataIndex: "depname",
      },
      {
        title: "Contact",
        dataIndex: "contact",
      },
      {
        title: "Pay",
        dataIndex: "pay",
      },
    ],
    loading: true,
    paginationSize: 15,
  });

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${fetchUrl}/getDoctorsData`).then(res => {
        settableData(prevData => {
          return { ...prevData, loading: false, data: res.data };
        });
      });
    };
    fetchData();
  }, []);
  const deleteData = {
    link: "/deleteDoctorsData",
  };
  return (
    <>
      <ChildPage
        message="Doctors Records"
        tableData={tableData}
        deleteData={deleteData}
      />
    </>
  );
}

export default Doctors;
