import React, { useState } from 'react';
import { X, Calculator, IndianRupee, ArrowRight, Check } from 'lucide-react';
import { Property } from '../types/property';

interface PlotCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property | null;
}

export const PlotCalculatorModal: React.FC<PlotCalculatorModalProps> = ({
  isOpen,
  onClose,
  property,
}) => {
  const [cents, setCents] = useState<number>(3.5);
  const [ratePerCent, setRatePerCent] = useState<number>(1450000); // 14.5 Lakhs
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(15);
  const interestRate = 8.75; // Annual % for plot loans

  if (!isOpen) return null;

  // Conversions
  const sqFt = Math.round(cents * 435.6);
  const grounds = (cents / 5.51).toFixed(2);
  const totalCost = Math.round(cents * ratePerCent);
  const stampAndReg = Math.round(totalCost * 0.11); // ~11% Tamil Nadu stamp duty & reg fees
  const grossTotal = totalCost + stampAndReg;

  const downPayment = Math.round(totalCost * (downPaymentPct / 100));
  const loanAmount = totalCost - downPayment;

  // Monthly EMI calculation: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    loanAmount > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  const formatLakhs = (amt: number) => {
    if (amt >= 10000000) {
      return `₹ ${(amt / 10000000).toFixed(2)} Cr`;
    }
    return `₹ ${(amt / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl my-auto text-[#520B0B]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/10 hover:bg-[#881616] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#520B0B] text-white p-6 sm:p-7 border-b border-[#C5A059]/30">
          <div className="flex items-center gap-2 text-[#DCBA77] mb-1">
            <Calculator className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">
              TAMIL NADU LAND MEASUREMENT & EMI ESTIMATOR
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Land Cost & Loan Calculator
          </h3>
          <p className="text-xs text-[#FAF8F5]/85 mt-1 font-light">
            {property ? `Customized for ${property.name}` : 'Accurate Cent to Sq.Ft conversion'}
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-7 space-y-5 max-h-[65vh] overflow-y-auto">
          {/* Cents Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-[#520B0B] uppercase tracking-wider">
                Plot Extent in Cents:
              </label>
              <span className="font-serif text-lg font-bold text-[#881616]">
                {cents} Cents
              </span>
            </div>
            <input
              type="range"
              min="1.5"
              max="20"
              step="0.25"
              value={cents}
              onChange={(e) => setCents(parseFloat(e.target.value))}
              className="w-full accent-[#881616] cursor-pointer"
            />
            {/* Quick conversion chips */}
            <div className="grid grid-cols-3 gap-2 mt-2 text-center text-xs">
              <div className="p-2 bg-white rounded-lg border border-[#E7DFD4]">
                <span className="text-[10px] text-[#8F6B28] block">Square Feet</span>
                <span className="font-bold text-[#520B0B]">{sqFt.toLocaleString()} sq.ft</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#E7DFD4]">
                <span className="text-[10px] text-[#8F6B28] block">Grounds</span>
                <span className="font-bold text-[#520B0B]">{grounds} Ground</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#E7DFD4]">
                <span className="text-[10px] text-[#8F6B28] block">1 Cent Basis</span>
                <span className="font-bold text-[#520B0B]">435.6 sq.ft</span>
              </div>
            </div>
          </div>

          {/* Custom Budget per cent */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-[#520B0B] uppercase tracking-wider">
                Custom Budget Estimator (Per Cent):
              </label>
              <span className="font-bold text-xs text-[#881616]">
                ₹ {(ratePerCent / 100000).toFixed(2)} Lakhs / Cent
              </span>
            </div>
            <input
              type="range"
              min="800000"
              max="2500000"
              step="50000"
              value={ratePerCent}
              onChange={(e) => setRatePerCent(parseInt(e.target.value))}
              className="w-full accent-[#881616] cursor-pointer"
            />
          </div>

          {/* Results Summary Box */}
          <div className="p-4 bg-white rounded-xl border border-[#C5A059]/40 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6E1010]/80">Basic Land Cost:</span>
              <span className="font-bold text-[#520B0B]">{formatLakhs(totalCost)}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6E1010]/80">Est. TN Stamp Duty & Registration (~11%):</span>
              <span className="font-medium text-[#520B0B]">{formatLakhs(stampAndReg)}</span>
            </div>
            <div className="pt-2 border-t border-[#E7DFD4] flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#520B0B]">
                Estimated Total Outlay:
              </span>
              <span className="font-serif text-lg font-bold text-[#881616]">
                {formatLakhs(grossTotal)}
              </span>
            </div>
          </div>

          {/* Bank EMI calculation */}
          <div className="p-4 bg-[#F7EFE1] rounded-xl border border-[#C5A059]/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#520B0B] mb-3">
              Bank Loan & Monthly EMI Projection (80% Loan)
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs mb-3">
              <div>
                <span className="text-[10px] text-[#8F6B28] block">Self Down Payment (20%)</span>
                <span className="font-bold text-[#520B0B]">{formatLakhs(downPayment)}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#8F6B28] block">Bank Loan Sanction (80%)</span>
                <span className="font-bold text-[#520B0B]">{formatLakhs(loanAmount)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#C5A059]/30">
              <div>
                <span className="text-[10px] font-bold text-[#8F6B28] uppercase block">
                  Approx. Monthly EMI ({tenureYears} Yrs @ 8.75%)
                </span>
                <span className="font-serif text-xl font-bold text-[#881616]">
                  ₹ {emi.toLocaleString('en-IN')} / month
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#075E54] bg-[#25D366]/10 px-2 py-1 rounded">
                SBI / HDFC Pre-Approved
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E7DFD4] flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-lg bg-[#6E1010] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#520B0B]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
