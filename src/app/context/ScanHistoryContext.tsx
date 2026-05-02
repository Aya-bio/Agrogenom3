import { createContext, useContext, useState, ReactNode } from "react";

export interface ScanResult {
  id: string;
  image: string;
  timestamp: Date;
  diseaseName: string;
  confidence: number;
  status: "healthy" | "warning" | "critical";
  nutrientDeficiency?: string[];
  pestSigns?: string;
  waterStress?: string;
  infection?: string;
  treatment: string[];
  preventive: string[];
  irrigationAdvice: string;
  expertConsultation: boolean;
}

interface ScanHistoryContextType {
  scans: ScanResult[];
  addScan: (scan: ScanResult) => void;
  clearHistory: () => void;
}

const ScanHistoryContext = createContext<ScanHistoryContextType | undefined>(undefined);

export function ScanHistoryProvider({ children }: { children: ReactNode }) {
  const [scans, setScans] = useState<ScanResult[]>([]);

  const addScan = (scan: ScanResult) => {
    setScans(prev => [scan, ...prev].slice(0, 20)); // Keep last 20 scans
  };

  const clearHistory = () => {
    setScans([]);
  };

  return (
    <ScanHistoryContext.Provider value={{ scans, addScan, clearHistory }}>
      {children}
    </ScanHistoryContext.Provider>
  );
}

export function useScanHistory() {
  const context = useContext(ScanHistoryContext);
  if (!context) {
    throw new Error("useScanHistory must be used within ScanHistoryProvider");
  }
  return context;
}
