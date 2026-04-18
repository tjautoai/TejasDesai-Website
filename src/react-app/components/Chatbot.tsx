import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

type ChatPath = 'buy' | 'sell' | 'relocate' | 'browse' | null;

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: string[];
}

interface LeadData {
  intent?: string;
  budget?: string;
  area?: string;
  timeline?: string;
  preapproved?: string;
  reason?: string;
  fromLocation?: string;
  priority?: string;
  name?: string;
  email?: string;
  source?: string;
}

export default function Chatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState<ChatPath>(null);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Gate State
  const [showGate, setShowGate] = useState(false);
  const [gateDestination, setGateDestination] = useState<string | null>(null);
  const [gateName, setGateName] = useState('');
  const [gateEmail, setGateEmail] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: Message = {
    id: 1,
    text: "Hi! I'm Tejas's assistant. Are you looking to buy, sell, or just explore Pittsburgh real estate?",
    isBot: true,
    options: ['I Want to Buy', 'I Want to Sell', "I'm Relocating", 'Just Browsing'],
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [userData, setUserData] = useState<LeadData>({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showGate]);

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    setMessages((prev) => [...prev, { id: Date.now(), text, isBot, options }]);
  };

  const resetChat = () => {
    setPath(null);
    setStep(0);
    setUserData({});
    setShowGate(false);
    setGateDestination(null);
    setGateName('');
    setGateEmail('');
    setMessages([{ ...initialMessage, id: Date.now() }]);
  };

  const handleOptionClick = (option: string) => {
    if (showGate) return;

    // Check if it's a navigation button
    const navOptions = ['View Listings', 'Neighborhood Guides', 'Explore Neighborhoods', 'Market Report', 'View Market Report', 'Mortgage Calculator', 'Calculate Mortgage', 'Book a Call', 'Get Home Valuation'];
    if (navOptions.includes(option)) {
      addMessage(option, false);
      setTimeout(() => captureLeadAndNavigate(option), 400);
      return;
    }

    addMessage(option, false);
    setTimeout(() => processNextStep(option), 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || showGate) return;
    
    const value = inputValue;
    addMessage(value, false);
    setInputValue('');
    setTimeout(() => processNextStep(value), 400);
  };

  const captureLeadAndNavigate = (response: string) => {
    if (!userData.email) {
      setGateDestination(response);
      addMessage("Before I take you there — mind sharing your name and email? Tejas would love to follow up with personalized recommendations.", true);
      setShowGate(true);
    } else {
      handleFinalNavigation(response);
    }
  };

  const processNextStep = async (response: string) => {
    if (step === 0 && !path) {
      if (response === 'I Want to Buy') {
        setPath('buy');
        setUserData({ intent: 'buy' });
        addMessage("What's your budget range?", true, ['Under $300K', '300K-500K', '500K-750K', '750K+']);
        setStep(1);
      } else if (response === 'I Want to Sell') {
        setPath('sell');
        setUserData({ intent: 'sell' });
        addMessage("Which area is your home in?", true, ['Wexford', 'Cranberry Township', 'Sewickley', 'North Hills', 'Other']);
        setStep(1);
      } else if (response === "I'm Relocating") {
        setPath('relocate');
        setUserData({ intent: 'relocate' });
        addMessage("Where are you relocating from?", true, ['Within Pennsylvania', 'Another State', 'International']);
        setStep(1);
      } else if (response === 'Just Browsing') {
        setPath('browse');
        setUserData({ intent: 'browse' });
        addMessage("No problem! Here are some helpful resources:", true, ['View Listings', 'Neighborhood Guides', 'Market Report', 'Mortgage Calculator']);
        setStep(1);
      }
      return;
    }

    if (path === 'buy') {
      if (step === 1) {
        setUserData((prev) => ({ ...prev, budget: response }));
        addMessage("Which area interests you?", true, ['Wexford', 'Cranberry Township', 'Sewickley', 'North Hills', 'Not Sure Yet']);
        setStep(2);
      } else if (step === 2) {
        setUserData((prev) => ({ ...prev, area: response }));
        addMessage("What's your timeline?", true, ['Ready Now', '1-3 Months', '3-6 Months', 'Just Exploring']);
        setStep(3);
      } else if (step === 3) {
        setUserData((prev) => ({ ...prev, timeline: response }));
        addMessage("Are you pre-approved for a mortgage?", true, ['Yes', 'No', 'Not Sure']);
        setStep(4);
      } else if (step === 4) {
        setUserData((prev) => ({ ...prev, preapproved: response }));
        addMessage("Great! Let me connect you with Tejas. What's your name?", true);
        setStep(5);
      } else if (step === 5) {
        setUserData((prev) => ({ ...prev, name: response }));
        addMessage("And your email address?", true);
        setStep(6);
      } else if (step === 6) {
        const finalData = { ...userData, email: response };
        setUserData(finalData);
        await submitLead(finalData, 'Website Chatbot');
        addMessage(`Perfect ${finalData.name}! Tejas will reach out within 24 hours. In the meantime:`, true, ['View Listings', 'Calculate Mortgage', 'Book a Call']);
        setStep(7);
      }
    } else if (path === 'sell') {
      if (step === 1) {
        setUserData((prev) => ({ ...prev, area: response }));
        addMessage("What's your timeline for selling?", true, ['ASAP', '1-3 Months', '3-6 Months', 'Just Exploring']);
        setStep(2);
      } else if (step === 2) {
        setUserData((prev) => ({ ...prev, timeline: response }));
        addMessage("What's your reason for selling?", true, ['Upsizing', 'Downsizing', 'Relocating', 'Investment', 'Other']);
        setStep(3);
      } else if (step === 3) {
        setUserData((prev) => ({ ...prev, reason: response }));
        addMessage("I'd love to get you a free home valuation! What's your name?", true);
        setStep(4);
      } else if (step === 4) {
        setUserData((prev) => ({ ...prev, name: response }));
        addMessage("And your email?", true);
        setStep(5);
      } else if (step === 5) {
        const finalData = { ...userData, email: response };
        setUserData(finalData);
        await submitLead(finalData, 'Website Chatbot');
        addMessage(`Thanks ${finalData.name}! Tejas will prepare a personalized home valuation and reach out within 24 hours.`, true, ['Get Home Valuation', 'View Market Report', 'Book a Call']);
        setStep(6);
      }
    } else if (path === 'relocate') {
      if (step === 1) {
        setUserData((prev) => ({ ...prev, fromLocation: response }));
        addMessage("When are you planning to move?", true, ['Within 3 Months', '3-6 Months', '6-12 Months', 'Just Planning']);
        setStep(2);
      } else if (step === 2) {
        setUserData((prev) => ({ ...prev, timeline: response }));
        addMessage("What matters most to you?", true, ['Top Schools', 'Short Commute', 'Walkability', 'Larger Home', 'Lower Price']);
        setStep(3);
      } else if (step === 3) {
        setUserData((prev) => ({ ...prev, priority: response }));
        addMessage("Tejas relocated to Pittsburgh too - he gets it! What's your name?", true);
        setStep(4);
      } else if (step === 4) {
        setUserData((prev) => ({ ...prev, name: response }));
        addMessage("And your email?", true);
        setStep(5);
      } else if (step === 5) {
        const finalData = { ...userData, email: response };
        setUserData(finalData);
        await submitLead(finalData, 'Website Chatbot');
        addMessage(`Welcome to Pittsburgh soon ${finalData.name}! Tejas will send you a personalized neighborhood guide.`, true, ['Explore Neighborhoods', 'Book a Call', 'View Resources']);
        setStep(6);
      }
    }
  };

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gateName.trim() || !gateEmail.trim()) return;
    
    const finalData = { ...userData, name: gateName, email: gateEmail };
    setUserData(finalData);
    setShowGate(false);
    
    await submitLead(finalData, `Just Browsing - ${gateDestination}`);
    
    if (gateDestination) {
      handleFinalNavigation(gateDestination);
    }
  };

  const skipGate = () => {
    setShowGate(false);
    if (gateDestination) {
      handleFinalNavigation(gateDestination);
    }
  };

  const handleFinalNavigation = (response: string) => {
    setIsOpen(false);
    if (response === 'View Listings') navigate('/listings');
    else if (response === 'Calculate Mortgage' || response === 'Mortgage Calculator') navigate('/resources#mortgage-calculator');
    else if (response === 'Book a Call') navigate('/about#schedule');
    else if (response === 'Get Home Valuation') navigate('/sell#valuation');
    else if (response === 'Market Report' || response === 'View Market Report') navigate('/blog/pittsburgh-real-estate-market-report-spring-2026');
    else if (response === 'Explore Neighborhoods' || response === 'Neighborhood Guides') navigate('/neighborhoods');
    else if (response === 'View Resources') navigate('/resources');
  };

  const submitLead = async (data: LeadData, source: string) => {
    try {
      await fetch('https://formspree.io/f/xvzdkbqp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          ...data
        }),
      });
    } catch (err) {
      console.error('Chatbot lead capture error:', err);
    }
  };

  const showInput = () => {
    if (showGate) return false; // Handled by a different form
    if (step === 0 && !path) return false;
    if (path === 'buy' && (step === 5 || step === 6)) return true;
    if (path === 'sell' && (step === 4 || step === 5)) return true;
    if (path === 'relocate' && (step === 4 || step === 5)) return true;
    return false;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/90 transition-colors"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white border border-black/10 shadow-2xl flex flex-col" style={{ height: '540px', maxHeight: 'calc(100vh - 120px)' }}>
          <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-medium">Chat with Tejas</p>
              <p className="text-xs text-white/60">Typically replies instantly</p>
            </div>
            <button onClick={resetChat} className="text-xs text-white/60 hover:text-white">
              Reset
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] ${message.isBot ? 'bg-secondary' : 'bg-black text-white'} px-4 py-3`}>
                  <p className="text-sm">{message.text}</p>
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionClick(option)}
                          className="w-full text-left px-3 py-2 text-sm bg-white border border-black/10 hover:border-black hover:bg-black hover:text-white transition-colors flex items-center justify-between group"
                        >
                          <span className="text-black group-hover:text-white transition-colors">{option}</span>
                          <ArrowRight size={14} className="text-black group-hover:text-white transition-colors" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {showGate && (
            <div className="p-4 border-t border-black/10 bg-secondary">
              <form onSubmit={handleGateSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={gateName}
                  onChange={(e) => setGateName(e.target.value)}
                  className="w-full px-3 py-2 border border-black/20 text-sm focus:outline-none focus:border-black"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-black/20 text-sm focus:outline-none focus:border-black"
                />
                <div className="flex gap-2 pt-1">
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white py-2 px-3 text-sm font-medium hover:bg-black/90 transition-colors flex items-center justify-center gap-1"
                  >
                    Take Me There <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={skipGate}
                    className="px-4 py-2 border border-black/20 text-sm hover:border-black transition-colors"
                  >
                    Skip
                  </button>
                </div>
              </form>
            </div>
          )}

          {showInput() && (
            <form onSubmit={handleSubmit} className="p-4 border-t border-black/10">
              <div className="flex gap-2">
                <input
                  type={
                    ((path === 'buy' && step === 6) ||
                     (path === 'sell' && step === 5) ||
                     (path === 'relocate' && step === 5)) ? 'email' : 'text'
                  }
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-black/20 text-sm focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-black text-white hover:bg-black/90 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}
