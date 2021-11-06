import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { onMounted } from "../helpers/frontend";
import Topnav from "../components/Topnav";
import EditSchduleMenu from "../components/EditSchduleMenu";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Button,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddSchduleMenu from "../components/AddSchduleMenu";

function ManagerPage(props) {
  const history = useHistory();

  const [startDate, setStartDate] = useState(new Date());
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [paginate, setPaginate] = useState({ page: 1, pp: 10 });
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  // Table
  const columns = [
    { label: "ชื่อ - นามสกุล", align: "center" },
    { label: "เริ่มงาน", align: "center" },
    { label: "จบงาน", align: "center" },
    { label: "เวลาเข้างาน", align: "center" },
    { label: "เวลาออกงาน", align: "center" },
    { label: "เวลางานทั้งหมด", align: "center" },
    { label: "เวลางาน OT", align: "center" },
  ];
  const rows = [
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: true,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: true,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: true,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: true,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: true,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: true,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: false,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: false,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: false,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: false,
    },
    {
      name: "สมปอง งานวัด",
      start: "05.00",
      end: "13.00",
      arrive: "05.00",
      leave: "13.00",
      total: "5.5",
      ot: "2.5",
      online: false,
    },
  ];

  const onChangePage = (e, newPage) => {
    setPaginate({ ...paginate, page: newPage + 1 });
  };
  const onChangePerPage = (e) => {
    setPaginate({ ...paginate, page: 1, pp: e.target.value });
  };

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  useEffect(() => {
    onMounted();
    console.log("Manager page");
  }, []);

  return (
    <>
      <Topnav />
      <section className="section-simple">
        <div className="container manager">
          <TableContainer>
            <div className="options d-space-between table-options">
              <div className="option left">
                <PersonIcon className="color-navy mr-1" />{" "}
                <p className="color-navy">4 / 14</p>
              </div>
              <div className="option right">
                <div className="cursor-pointer">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<DateRangeIcon className="color-navy mr-2" />}
                  />
                </div>
                <select className="mr-2">
                  <option value="" disabled selected>
                    แผนก
                  </option>
                  <option value="1">สับไก่</option>
                </select>
                <Button
                  className="bgcolor-navy mr-2"
                  variant="contained"
                  onClick={handleOpenAdd}
                  sx={{
                    fontFamily: "Kanit",
                    borderRadius: "5px",
                  }}
                >
                  เพิ่มตารางงาน
                </Button>
                <Button
                  className="bgcolor-navy"
                  variant="contained"
                  onClick={handleOpenEdit}
                  sx={{
                    fontFamily: "Kanit",
                    borderRadius: "5px",
                  }}
                >
                  จัดการตารางงาน
                </Button>
              </div>
            </div>
            <select id="table">
              <option value="1">งานถอนขน กะ 1 เวลา 05.00 - 13.00 น.</option>
              <option value="2">งานถอนขน กะ 2 เวลา 05.00 - 13.00 น.</option>
              <option value="3">งานถอนขน กะ 3 เวลา 05.00 - 13.00 น.</option>
              <option value="4">งานถอนขน กะ 4 เวลา 05.00 - 13.00 น.</option>
            </select>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((col, i) => (
                    <TableCell
                      key={i}
                      align={col.align ? col.align : "left"}
                      padding="normal"
                    >
                      {col.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!rows.length ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      No data found.
                    </TableCell>
                  </TableRow>
                ) : (
                  rows
                    .slice(
                      (paginate.page - 1) * paginate.pp,
                      paginate.page * paginate.pp
                    )
                    .map((d, i) => {
                      let index = (paginate.page - 1) * paginate.pp + i + 1;
                      return (
                        <TableRow
                          className={d.online ? "" : "color-gray"}
                          key={index}
                          hover
                        >
                          <TableCell align="left">{d.name}</TableCell>
                          <TableCell align="center">{d.start}</TableCell>
                          <TableCell align="center">{d.end}</TableCell>
                          <TableCell align="center">{d.arrive}</TableCell>
                          <TableCell align="center">{d.leave}</TableCell>
                          <TableCell align="center">{d.total}</TableCell>
                          <TableCell align="center">{d.ot}</TableCell>
                        </TableRow>
                      );
                    })
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            labelRowsPerPage="Show"
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={paginate.pp}
            page={paginate.page - 1}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangePerPage}
          />
        </div>
      </section>
      <EditSchduleMenu open={openEdit} onClose={handleCloseEdit} />
      <AddSchduleMenu open={openAdd} onClose={handleCloseAdd} />
    </>
  );
}

ManagerPage.defaultProps = {};
ManagerPage.propTypes = {
  // processName: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  // processName: actionName
})(ManagerPage);
