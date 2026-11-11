import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  Car,
  Phone,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Send,
  Sparkles,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { Property, Language, SiteVisitFormData } from '../types/property';
import { TRANSLATIONS } from '../data/translations';

interface SiteVisitSectionProps {
  properties: Property[];
  language: Language;
  preselectedProject?: string;
}

export const SiteVisitSection: React.FC<SiteVisitSectionProps> = ({
  properties,
  language,
  preselectedProject,
}) => {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<SiteVisitFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredProject: preselectedProject || properties[0]?.name || '',
    preferredDate: '',
    timeSlot: '10:00 AM - 01:00 PM',
    pickupRequired: true,
    pickupCity: 'Namakkal',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello MSP Properties! I would like to schedule a site visit:
- Name: ${formData.fullName || 'Prospective Buyer'}
- Phone: ${formData.phone || 'Provided via website'}
- Project: ${formData.preferredProject}
- Preferred Date: ${formData.preferredDate || 'Upcoming Weekend'}
- Time Slot: ${formData.timeSlot}
- Cab Pickup: ${formData.pickupRequired ? `Yes (${formData.pickupCity})` : 'Self-drive'}
- Remarks: ${formData.comments || 'Please share layout brochure'}`;

    return `https://wa.me/919443210987?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="site-visit" className="py-16 lg:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E7DFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Hide & Show on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE1] border border-[#C5A059]/40 text-[#8F6B28] mb-3">
            <Car className="w-3.5 h-3.5 text-[#731622]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              {t.siteVisit.tag}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#460C14] tracking-wide mb-3">
            {t.siteVisit.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed font-light">
            {t.siteVisit.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info & Contact Cards - Hide & Show on scroll */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-7 rounded-2xl border border-[#E7DFD4] shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-[#460C14] mb-4">
                What to Expect on Your Visit
              </h3>
              <ul className="space-y-3.5 text-sm text-[#5C131D]/85 leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <span>
                    <strong>Doorstep AC Cab Pickup:</strong> On Saturday or Sunday morning from your home or railway/bus terminus.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <span>
                    <strong>On-Ground Inspection:</strong> Walk through internal blacktop roads, inspect boundary stones, water lines, and survey markers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <span>
                    <strong>Direct Legal Scrutiny:</strong> Review approved DTCP master layout blueprints and parent deeds on-site.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Instant Channels */}
            <div className="bg-[#2E050B] text-white p-7 rounded-2xl shadow-lg border border-[#C5A059]/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-24 h-24 text-[#C5A059]" />
              </div>

              <h4 className="font-serif text-xl font-bold text-[#FAF8F5] mb-2">
                Need Instant Assistance?
              </h4>
              <p className="text-xs text-[#FAF8F5]/80 mb-5 font-light">
                Our property directors are available daily from 8:30 AM to 8:00 PM:
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919443210987"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#DCBA77]" />
                  <span>Call Us Now</span>
                </a>

                <a
                  href="https://wa.me/919443210987?text=Hello%20MSP%20Properties,%20I%20would%20like%20to%20enquire%20about%20your%20villa%20plots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form - Hide & Show on scroll */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-2xl border border-[#E7DFD4] shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#075E54] flex items-center justify-center mx-auto border border-[#25D366]/30">
                  <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#460C14]">
                  Site Visit Request Received!
                </h3>
                <p className="text-sm text-[#5C131D]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our site visit coordinator will call you within 30 minutes to confirm your scheduled slot and cab pickup details.
                </p>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E7DFD4] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#460C14]">
                  <p><strong>Project:</strong> {formData.preferredProject}</p>
                  <p><strong>Date & Slot:</strong> {formData.preferredDate || 'Upcoming Weekend'} ({formData.timeSlot})</p>
                  <p><strong>Cab Pickup:</strong> {formData.pickupRequired ? `Requested from ${formData.pickupCity}` : 'Self-drive to layout'}</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Details to WhatsApp Desk</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-3 px-6 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFE8] text-[#5C131D] text-xs font-bold border border-[#E7DFD4]"
                  >
                    Book Another Visit
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-[#460C14] mb-2">
                  {t.siteVisit.formTitle}
                </h3>
                <p className="text-xs text-[#5C131D]/80 mb-6 font-light">
                  Please fill in your details below to schedule your personalized site walkthrough.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1.5">
                      {t.siteVisit.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. S. Karthikeyan"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD4] bg-[#FAF8F5] text-sm text-[#460C14] focus:outline-none focus:border-[#731622] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1.5">
                      {t.siteVisit.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98421 23456"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD4] bg-[#FAF8F5] text-sm text-[#460C14] focus:outline-none focus:border-[#731622] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1.5">
                      {t.siteVisit.projectLabel} *
                    </label>
                    <select
                      value={formData.preferredProject}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredProject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD4] bg-[#FAF8F5] text-sm text-[#460C14] focus:outline-none focus:border-[#731622] focus:bg-white transition-all"
                    >
                      {properties.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1.5">
                      {t.siteVisit.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD4] bg-[#FAF8F5] text-sm text-[#460C14] focus:outline-none focus:border-[#731622] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1.5">
                      {t.siteVisit.dateLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD4] bg-[#FAF8F5] text-sm text-[#460C14] focus:outline-none focus:border-[#731622] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1.5">
                      {t.siteVisit.timeLabel}
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7DFD4] bg-[#FAF8F5] text-sm text-[#460C14] focus:outline-none focus:border-[#731622] focus:bg-white transition-all"
                    >
                      <option value="09:00 AM - 11:30 AM">Morning Slot (09:00 AM - 11:30 AM)</option>
                      <option value="11:30 AM - 02:00 PM">Noon Slot (11:30 AM - 02:00 PM)</option>
                      <option value="03:00 PM - 05:30 PM">Afternoon Slot (03:00 PM - 05:30 PM)</option>
                      <option value="05:30 PM - 07:00 PM">Sunset Slot (05:30 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Free Cab Pickup Section */}
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E7DFD4]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#731622]" />
                      <span className="text-xs font-bold text-[#460C14]">
                        {t.siteVisit.pickupLabel}
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.pickupRequired}
                        onChange={(e) =>
                          setFormData({ ...formData, pickupRequired: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#731622]"></div>
                    </label>
                  </div>

                  {formData.pickupRequired && (
                    <div className="pt-2 border-t border-[#E7DFD4]/70">
                      <label className="block text-[11px] font-semibold text-[#8F6B28] uppercase tracking-wider mb-1">
                        {t.siteVisit.pickupCityLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Namakkal', 'Karur', 'Salem', 'Erode'].map((city) => (
                          <button
                            type="button"
                            key={city}
                            onClick={() => setFormData({ ...formData, pickupCity: city })}
                            className={`py-1.5 px-2 text-xs font-semibold rounded-md border text-center transition-all ${
                              formData.pickupCity === city
                                ? 'bg-[#5C131D] text-white border-[#5C131D]'
                                : 'bg-white text-[#460C14] border-[#E7DFD4] hover:bg-[#FAF8F5]'
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Specific Comments */}
                <div>
                  <label className="block text-xs font-bold text-[#460C14] uppercase tracking-wider mb-1.5">
                    {t.siteVisit.commentsLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="e.g. Interested in East-facing 3 Cents corner plot; require SBI bank loan assistance."
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E7DFD4] bg-[#FAF8F5] text-sm text-[#460C14] focus:outline-none focus:border-[#731622] focus:bg-white transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#731622] hover:bg-[#5C131D] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A059]/40"
                >
                  <Send className="w-4 h-4 text-[#DCBA77]" />
                  <span>{t.siteVisit.submitBtn}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* 
          OFFICIAL GOOGLE MAPS LOCATION IN CONTACT SECTION
          Location: MSP PROPERTIES & BUILDERS, Namakkal
          URL: https://maps.app.goo.gl/oam7PuZEW2iQ2JAp8
        */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl border border-[#E7DFD4] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Location Information (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#FAF8F5] to-white border-b lg:border-b-0 lg:border-r border-[#E7DFD4]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE1] border border-[#C5A059]/40 text-[#8F6B28] mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#731622]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    {language === 'ta' ? 'அதிகாரப்பூர்வ அலுவலக முகவரி' : 'OFFICIAL OFFICE LOCATION'}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#460C14] mb-2">
                  MSP PROPERTIES & BUILDERS
                </h3>

                <p className="text-xs sm:text-sm text-[#5C131D]/80 leading-relaxed mb-6 font-light">
                  {language === 'ta'
                    ? 'எங்கள் தலைமை அலுவலகத்திற்கு நேரில் வருகை தந்து DTCP அப்ரூவல் வரைபடங்கள், பட்டா ஆவணங்கள் மற்றும் மனை விபரங்களை நேரடியாக சரிபார்க்கலாம்.'
                    : 'Visit our central office in Namakkal to inspect DTCP master layout blueprints, computer patta title deeds, and meet directly with our land development team.'}
                </p>

                <div className="space-y-4 text-xs text-[#460C14]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#8F6B28]" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-[#460C14]">
                        {language === 'ta' ? 'அலுவலக முகவரி' : 'Office Address'}
                      </p>
                      <p className="text-[11px] text-[#5C131D]/80 leading-relaxed">
                        MSP PROPERTIES & BUILDERS, S P Pudur, Near Karai Road / Trichy Main Road, Namakkal, Tamil Nadu - 637001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#8F6B28]" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-[#460C14]">
                        {language === 'ta' ? 'பணி நேரம்' : 'Office Hours'}
                      </p>
                      <p className="text-[11px] text-[#5C131D]/80">
                        {language === 'ta'
                          ? 'திங்கள் – ஞாயிறு: காலை 8:30 முதல் இரவு 8:00 வரை (7 நாட்களும் செயல்படும்)'
                          : 'Monday – Sunday: 8:30 AM to 8:00 PM (Site visits open all 7 days)'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F7EFE1] flex items-center justify-center text-[#731622] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#8F6B28]" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs text-[#460C14]">
                        {language === 'ta' ? 'நேரடி அழைப்பு' : 'Direct Helpline'}
                      </p>
                      <p className="text-[11px] text-[#5C131D]/80 font-medium">
                        +91 94432 10987 / +91 98421 54321
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7DFD4] flex flex-col sm:flex-row gap-2.5">
                <a
                  href="https://maps.app.goo.gl/oam7PuZEW2iQ2JAp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-[#731622] hover:bg-[#5C131D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#EAD09C]" />
                  <span>{language === 'ta' ? 'கூகுள் மேப்பில் பார்க்க' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://maps.google.com/maps/dir//11.2208864,78.1587693/@11.2208864,78.1587693,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#731622] border border-[#E7DFD4] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#8F6B28]" />
                  <span>{language === 'ta' ? 'வழித்தடம் பார்க்க' : 'Get Directions'}</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Embedded Google Map (7 cols) */}
            <div className="lg:col-span-7 h-[340px] sm:h-[420px] lg:h-auto min-h-[340px] relative bg-[#E7DFD4]">
              <iframe
                title="MSP PROPERTIES & BUILDERS Google Map Location"
                src="https://maps.google.com/maps?q=11.2208864,78.1587693&hl=en&z=16&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute top-3 right-3 z-10">
                <a
                  href="https://maps.app.goo.gl/oam7PuZEW2iQ2JAp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#460C14] hover:text-[#731622] text-[11px] font-bold border border-[#E7DFD4] shadow-md flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3 h-3 text-[#C5A059]" />
                  <span>{language === 'ta' ? 'முழு மேப்' : 'View Full Map'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
