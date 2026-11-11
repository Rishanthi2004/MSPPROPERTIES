import React, { useState } from 'react';
import { X, Calendar, Car, Send, MessageCircle, CheckCircle2, Phone } from 'lucide-react';
import { Property, Language } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  properties: Property[];
  language: Language;
  preselectedProjectName?: string;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  properties,
  language,
  preselectedProjectName,
}) => {
  const t = TRANSLATIONS[language];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProject, setSelectedProject] = useState(
    preselectedProjectName || properties[0]?.name || ''
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 01:00 PM');
  const [pickupNeeded, setPickupNeeded] = useState(true);
  const [pickupCity, setPickupCity] = useState('Namakkal');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello MSP Properties! I would like to book a site visit:
- Name: ${fullName}
- Phone: ${phone}
- Project: ${selectedProject}
- Date: ${preferredDate || 'This Weekend'}
- Slot: ${timeSlot}
- Cab Pickup: ${pickupNeeded ? `Yes (${pickupCity})` : 'Self Drive'}`;

    return `https://wa.me/919443210987?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl my-auto text-[#460C14]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/10 hover:bg-[#731622] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#5C131D] text-white p-6 sm:p-7 border-b border-[#C5A059]/30">
          <span className="text-[10px] font-bold tracking-widest text-[#DCBA77] uppercase block mb-1">
            MSP PROPERTIES CONCIERGE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Schedule a Site Visit
          </h3>
          <p className="text-xs text-[#FAF8F5]/85 mt-1 font-light">
            Enjoy complimentary weekend AC cab pickup for your family.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 text-[#075E54] flex items-center justify-center mx-auto border border-[#25D366]/30">
                <CheckCircle2 className="w-7 h-7 text-[#25D366]" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#460C14]">
                Visit Request Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our site coordinator will reach out shortly to verify your timing and chauffeur details.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#E7DFD4] text-[#5C131D] text-xs font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DFD4] bg-white focus:outline-none focus:border-[#731622]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98422 12345"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DFD4] bg-white focus:outline-none focus:border-[#731622]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1">
                  Selected Development *
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DFD4] bg-white focus:outline-none focus:border-[#731622]"
                >
                  {properties.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.location.split(',')[0]})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DFD4] bg-white focus:outline-none focus:border-[#731622]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E7DFD4] bg-white focus:outline-none focus:border-[#731622]"
                  >
                    <option value="10:00 AM - 01:00 PM">Morning Slot (10 AM - 1 PM)</option>
                    <option value="02:00 PM - 05:00 PM">Afternoon Slot (2 PM - 5 PM)</option>
                    <option value="05:00 PM - 07:00 PM">Sunset Slot (5 PM - 7 PM)</option>
                  </select>
                </div>
              </div>

              {/* Cab Pickup Toggle */}
              <div className="p-3 bg-white rounded-lg border border-[#E7DFD4] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#731622]" />
                  <span className="text-xs font-bold text-[#460C14]">
                    Require Complimentary AC Cab Pickup?
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={pickupNeeded}
                  onChange={(e) => setPickupNeeded(e.target.checked)}
                  className="w-4 h-4 accent-[#731622]"
                />
              </div>

              {pickupNeeded && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#8F6B28] font-semibold">City:</span>
                  {['Namakkal', 'Karur', 'Salem', 'Erode'].map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setPickupCity(city)}
                      className={`px-3 py-1 rounded-md text-xs font-medium border ${
                        pickupCity === city
                          ? 'bg-[#5C131D] text-white border-[#5C131D]'
                          : 'bg-white text-[#460C14] border-[#E7DFD4]'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#731622] hover:bg-[#5C131D] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/30"
              >
                <Send className="w-4 h-4 text-[#DCBA77]" />
                <span>Confirm Free Site Visit</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
