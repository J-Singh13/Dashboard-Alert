import AlertCard from "./AlertCard";
import { ShieldAlert, AlertTriangle, EyeOff } from "lucide-react"; // Lucide icons

const dummyAlerts = [
  "Phishing Email Detected",
  "Suspicious Login from Russia",
  "Anomaly in Firewall Logs",
  "Malware Signature Found",
  "Failed Login Attempt (x10)"
];

export default function Dashboard() {
  return (
    <div className="p-5 grid gap-5 md:grid-cols-3 sm:grid-cols-1">
      <AlertCard
        title="Ignored Alerts"
        initialCount={200}
        icon={EyeOff}
        dummyAlerts={dummyAlerts}
      />
      <AlertCard
        title="Wrongly Closed Alerts"
        initialCount={35}
        icon={AlertTriangle}
        dummyAlerts={dummyAlerts}
      />
      <AlertCard
        title="Active Threats"
        initialCount={5}
        icon={ShieldAlert}
        dummyAlerts={dummyAlerts}
      />
    </div>
  );
}
