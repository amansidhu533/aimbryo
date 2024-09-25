import {
  Row,
  Col,
  Card,
  Radio,
  message,
  Button,
  Typography,
  Pagination,
  Checkbox,
} from "antd";
import { useState } from "react";
import Main from "../components/layout/Main";
import ViewIcon from "../assets/images/icon-view.png";
import UploadIcon from "../assets/images/icon-upload.png";
import SearchIcon from "../assets/images/icon-search.png";
import AddIcon from "../assets/images/icon-add.png";
import FilterIcon from "../assets/images/icon-filter.png";

import Input from "antd/es/input/Input";
const { Title } = Typography;

// table code start
const columns = [
  {
    title: "Patient Name, MR No., Gender",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Accession#",
    dataIndex: "accession",
    key: "accession",
  },
  {
    title: "Doctor",
    key: "doctor",
    dataIndex: "doctor",
  },
  {
    title: "Notes",
    key: "notes",
    dataIndex: "notes",
  },
  {
    title: "Upload Consent",
    key: "uploadConsent",
    dataIndex: "uploadConsent",
  },
  {
    title: "Stim Report",
    key: "stimReport",
    dataIndex: "stimReport",
  },
  {
    title: "Result",
    key: "result",
    dataIndex: "result",
  },
  {
    title: "Report Data",
    key: "reportData",
    dataIndex: "reportData",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
];

const data = [
  {
    key: "1",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "N/A",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status completed">Completed</span>,
  },
  {
    key: "2",

    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "Released",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status pending">Pending</span>,
  },
  {
    key: "3",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "Released",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status completed">Completed</span>,
  },
  {
    key: "4",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "Released",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status pending">Pending</span>,
  },
  {
    key: "5",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "N/A",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status pending">Pending</span>,
  },
  {
    key: "6",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "Released",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status completed">Completed</span>,
  },
  {
    key: "7",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "Released",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status pending">Pending</span>,
  },
  {
    key: "8",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "N/A",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status completed">Completed</span>,
  },
  {
    key: "9",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "Released",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status pending">Pending</span>,
  },
  {
    key: "4",
    name: (
      <div className="name">
        Ralph Edwards
        <br />
        <span>SDF45678543 |</span> <span>Female</span>
      </div>
    ),
    accession: "123RND",
    doctor: "Cody Fisher",
    notes: (
      <a
        href="#text"
        onClick={() => message.info("Viewing notes for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    uploadConsent: (
      <a
        href="#text"
        onClick={() => message.info("Upload Consent for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    stimReport: (
      <a
        href="#text"
        onClick={() => message.info("Stim Report for Ralph Edwards")}
        className="uploadLink"
      >
        <img src={UploadIcon} alt="" />
        Upload
      </a>
    ),
    result: "Released",
    reportData: (
      <a
        href="#text"
        onClick={() => message.info("Viewing report Data for Ralph Edwards")}
        className="viewLink"
      >
        <img src={ViewIcon} alt="" />
        View
      </a>
    ),
    status: <span className="status completed">Completed</span>,
  },
];

function Patients() {
  const [checkedValues, setCheckedValues] = useState([]);
  const [current, setCurrent] = useState(1);
  const pageSize = 5;
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const paginatedData = data.slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  // Calculate the range of entries to display
  const startEntry = (current - 1) * pageSize + 1;
  const endEntry = Math.min(current * pageSize, data.length);

  const handleAddClick = () => {
    message.info("Add button clicked!");
  };

  const handleFilterClick = () => {
    message.info("Filter button clicked!");
  };


  const options = ['No Transferable Embryos', 'All Transferable Embryos', 'Draft Patients', 'International Patients'];

  const onCheckboxChange = (checkedValues) => {
    setCheckedValues(checkedValues);
    console.log('checked = ', checkedValues);
  };
  return (
    <Main>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="patients-table tablespace mb-24"
              title="Patients"
              extra={
                <div className="header-right">
                  <Input
                    className="header-search"
                    placeholder="Search by Name, Case ID, Accession"
                    prefix={
                      <img
                        src={SearchIcon}
                        alt="Search Icon"
                        style={{ width: 20, height: 20 }}
                      />
                    }
                  />
                  <Button
                    type="default"
                    onClick={handleAddClick}
                    style={{ marginRight: 10 }}
                  >
                    <img src={AddIcon} alt="Add" />
                  </Button>
                  <Button type="default" onClick={handleFilterClick}>
                    <img src={FilterIcon} alt="Add" />
                  </Button>
                </div>
              }
            >
               <Checkbox.Group onChange={onCheckboxChange} value={checkedValues} className="checkbox-grp">
                <Row gutter={[16, 16]}>
                  {options.map((option, index) => (
                    <Col key={index}>
                      <Checkbox value={option}>{option}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
              <div className="table-responsive">
                <div className="div-table">
                  <div className="div-table-header">
                    <div className="div-table-row">
                      {columns.map((column) => (
                        <div className="div-table-cell" key={column.key}>
                          {column.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="div-table-body">
                    {data.map((item) => (
                      <div className="div-table-row" key={item.key}>
                        {columns.map((column) => (
                          <div className="div-table-cell" key={column.key}>
                            {item[column.dataIndex]}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="table-footer">
                <div className="pagination-text">
                  Showing {startEntry} to {endEntry} of {data.length} entries
                </div>

                <Pagination
                  current={current}
                  pageSize={pageSize}
                  total={data.length}
                  onChange={(page) => setCurrent(page)}
                  style={{ marginTop: 16, textAlign: "right" }}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 0]} className="total-footer">
          <Col xs="24" xl={24}>
            <div>
              <span>Total</span>
              <span>:</span>
              <span>29</span>
            </div>
            <ul>
              <li>
                <span className="not-started">&nbsp;</span>Not started
              </li>
              <li>
                <span className="pending">&nbsp;</span>Pending
              </li>
              <li>
                <span className="completed">&nbsp;</span>Completed
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Main>
  );
}

export default Patients;
