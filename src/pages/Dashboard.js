import React from "react";
import BasicTable from "../components/Tables/BasicTable";
import LineChart from "../components/Charts/LineChart";
import Calendar from "../components/Calendar/Calendar";
import KanbanBoard from "../components/Kanban/KanbanBoard";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h2>Table</h2>
                <BasicTable />
            </div>
            <div>
                <h2>Chart</h2>
                <LineChart />
            </div>
            <div>
                <h2>Calendar</h2>
                <Calendar />
            </div>
            <div>
                <h2>Kanban Board</h2>
                <KanbanBoard />
            </div>
        </div>
    );
};

export default Dashboard;
