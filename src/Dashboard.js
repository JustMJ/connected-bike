import React from "react";
import { LineChart } from "./components/LineChart";
import "./Dashboard.css";

const Dashboard = ({ data, liveHistory }) => {
  const hasHistory = liveHistory && liveHistory.length > 1;

  const cadenceData = hasHistory
    ? liveHistory.map((d) => ({ startTime: d.startTime, value: d.cadence }))
    : [];
  const heartRateData = hasHistory
    ? liveHistory.map((d) => ({ startTime: d.startTime, value: d.heartRate }))
    : [];
  const powerData = hasHistory
    ? liveHistory.map((d) => ({ startTime: d.startTime, value: d.power }))
    : [];

  return (
    <div className="dashboard">
      <div className="meters">
        <Meter label="kmph" value={data.speed} />
        <Meter label="rpm" value={data.cadence} />
        <Meter label="watts" value={data.power} />
        <Meter label="bpm" value={data.heartRate} />
      </div>

      {hasHistory && (
        <div className="live-charts">
          <LiveChart label="RPM" data={cadenceData} color="yellow" />
          <LiveChart label="BPM" data={heartRateData} color="red" />
          <LiveChart label="Watts" data={powerData} color="green" />
        </div>
      )}
    </div>
  );
};

const Meter = ({ label, value }) => {
  return (
    <div className="meter">
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  );
};

const LiveChart = ({ label, data, color }) => (
  <div className="live-chart">
    <div className="live-chart-label">{label}</div>
    <LineChart data={data} color={color} width={600} height={80} />
  </div>
);

export default Dashboard;
