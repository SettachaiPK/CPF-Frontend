import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Topnav from "../components/Topnav";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  DateNavigator,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formatDateYMD } from "../helpers/frontend";

function EmployeePage(props) {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("2018-11-01");
  const schedulerData = [
    {
      startDate: "2018-11-01T09:45",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
    },
    {
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
    },
  ];
  const onDateChange = (calendarDate) => {
    setCalendarDate(calendarDate);
    setCurrentDate(formatDateYMD(calendarDate));
  };
  /* eslint-disable */
  useEffect(() => {
    console.log("Home Page");
    onDateChange(new Date());
  }, []);
  /* eslint-enable */

  return (
    <>
      <Topnav />
      <section className="section-simple">
        <div className="container">
          <Calendar onChange={onDateChange} value={calendarDate} />
          <Scheduler data={schedulerData}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={setCurrentDate}
            />
            <DayView startDayHour={9} endDayHour={14} />
            <Appointments />
          </Scheduler>
        </div>
      </section>
    </>
  );
}

EmployeePage.defaultProps = {};
EmployeePage.propTypes = {
  // processName: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  // processName: actionName
})(EmployeePage);
