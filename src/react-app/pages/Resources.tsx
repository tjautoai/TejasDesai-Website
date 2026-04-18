import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { Calculator, FileText, ChevronDown, ArrowRight, HelpCircle, Lock } from 'lucide-react';

const tools = [
  {
    title: 'Mortgage Calculator',
    description: 'Estimate your monthly payment based on home price, down payment, and interest rate.',
    icon: Calculator,
    link: null,
    available: true,
    isCalculator: 'mortgage',
  },
  {
    title: 'Home Affordability Calculator',
    description: 'Find out how much home you can afford based on your income and expenses.',
    icon: Calculator,
    link: null,
    available: true,
    isCalculator: 'affordability',
  },
  {
    title: 'Rent vs. Buy Calculator',
    description: 'Compare the total cost of renting versus buying over time.',
    icon: Calculator,
    link: null,
    available: true,
    isCalculator: 'rentvsbuy',
  },
  {
    title: "Pittsburgh Buyer's Guide",
    description: 'Everything you need to know about buying a home in Pittsburgh.',
    icon: FileText,
    link: null,
    available: false,
  },
  {
    title: "Pittsburgh Seller's Guide",
    description: 'A comprehensive guide to selling your home for top dollar.',
    icon: FileText,
    link: null,
    available: false,
  },
  {
    title: 'First-Time Homebuyer Checklist',
    description: 'Step-by-step checklist for first-time buyers.',
    icon: FileText,
    link: null,
    available: false,
  },
  {
    title: 'Relocation to Pittsburgh Guide',
    description: 'Your complete guide to relocating to the Pittsburgh area.',
    icon: FileText,
    link: null,
    available: false,
  },
];

const buyerFaqs = [
  {
    question: 'How do I start the home buying process?',
    answer: 'Start by getting pre-approved for a mortgage. This tells you how much you can afford and shows sellers you\'re a serious buyer. Then, connect with a REALTOR® (like me!) who can guide you through the search, negotiations, and closing process.',
  },
  {
    question: 'What credit score do I need to buy a home?',
    answer: 'While requirements vary by loan type, most conventional loans require a minimum credit score of 620. FHA loans may accept scores as low as 580 with a 3.5% down payment. Higher scores typically mean better interest rates and more loan options.',
  },
  {
    question: 'How long does closing take?',
    answer: 'From accepted offer to closing typically takes 30-45 days. This includes time for home inspection, appraisal, title search, and loan processing. Cash purchases can close faster, sometimes in as little as 2 weeks.',
  },
  {
    question: 'What is earnest money?',
    answer: 'Earnest money is a deposit (typically 1-3% of the purchase price) that shows the seller you\'re serious about buying. It\'s held in escrow and applied to your down payment or closing costs at settlement. If you back out for reasons not covered in your contract, you may lose this deposit.',
  },
  {
    question: 'Do I need a buyer\'s agent?',
    answer: 'While not required, having a buyer\'s agent is highly recommended. A buyer\'s agent represents YOUR interests, helps you find properties, negotiates on your behalf, and guides you through the complex purchase process. Best of all, the seller typically pays the buyer\'s agent commission.',
  },
];

const sellerFaqs = [
  {
    question: 'How do I price my home?',
    answer: 'Pricing is both art and science. I conduct a Comparative Market Analysis (CMA) looking at recent sales of similar homes in your area, current market conditions, and your home\'s unique features. Pricing right from the start is crucial - overpriced homes sit on the market and often sell for less.',
  },
  {
    question: 'How long will it take to sell?',
    answer: 'In the Pittsburgh market, well-priced homes typically sell within 30-60 days. Factors affecting this include price, condition, location, and current market conditions. Proper preparation and marketing can significantly reduce time on market.',
  },
  {
    question: 'What is a Comparative Market Analysis?',
    answer: 'A CMA is a detailed report comparing your home to similar properties that have recently sold, are currently for sale, or were listed but didn\'t sell. It helps determine the optimal listing price for your home based on real market data.',
  },
  {
    question: 'Should I stage my home?',
    answer: 'Yes! Staged homes typically sell faster and for more money. Staging helps buyers envision themselves in the space. This can range from simple decluttering and rearranging furniture to professional staging with rented furniture and décor.',
  },
  {
    question: 'What are closing costs for sellers?',
    answer: 'Sellers typically pay 6-10% of the sale price in closing costs. This includes real estate commissions (typically 5-6%), transfer taxes, title insurance, and potential repairs or credits negotiated with the buyer. I\'ll provide a detailed net sheet so you know exactly what to expect.',
  },
];

export default function ResourcesPage() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const mortgageRef = useRef<HTMLDivElement>(null);
  const affordabilityRef = useRef<HTMLDivElement>(null);
  const rentVsBuyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCalculator) {
      const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        mortgage: mortgageRef,
        affordability: affordabilityRef,
        rentvsbuy: rentVsBuyRef,
      };
      
      const targetRef = refs[activeCalculator];
      if (targetRef && targetRef.current) {
        setTimeout(() => {
          targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [activeCalculator]);

  return (
    <>
      <Helmet>
        <title>Pittsburgh Real Estate Calculators & Home Guides | Tejas Desai</title>
        <meta name="description" content="Use my free interactive tools including a Home Affordability Calculator and Rent vs. Buy Calculator. Download expert Pittsburgh real estate guides for buyers and sellers." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ToolsSection 
          activeCalculator={activeCalculator} 
          setActiveCalculator={setActiveCalculator}
          mortgageRef={mortgageRef}
          affordabilityRef={affordabilityRef}
          rentVsBuyRef={rentVsBuyRef}
        />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-secondary">
      <div className="container-narrow">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Resources</p>
        <h1 className="text-display text-5xl md:text-6xl mb-6">Tools & Guides</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Free calculators, guides, and resources to help you make informed real estate decisions.
        </p>
      </div>
    </section>
  );
}

function ToolsSection({ 
  activeCalculator, 
  setActiveCalculator,
  mortgageRef,
  affordabilityRef,
  rentVsBuyRef
}: { 
  activeCalculator: string | null; 
  setActiveCalculator: (calc: string | null) => void;
  mortgageRef: React.RefObject<HTMLDivElement | null>;
  affordabilityRef: React.RefObject<HTMLDivElement | null>;
  rentVsBuyRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section id="mortgage-calculator" className="py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className={`p-8 border ${tool.available ? 'border-black/10 hover:border-black' : 'border-black/5 bg-secondary/50'} transition-colors`}
            >
              <tool.icon size={32} strokeWidth={1.5} className={tool.available ? 'text-champagne mb-4' : 'text-muted-foreground/50 mb-4'} />
              <h3 className={`text-xl font-medium mb-2 ${!tool.available ? 'text-muted-foreground' : ''}`}>{tool.title}</h3>
              <p className={`text-sm mb-4 ${tool.available ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>{tool.description}</p>
              {tool.available ? (
                tool.link ? (
                  <Link to={tool.link} className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-champagne transition-colors">
                    Use Tool <ArrowRight size={14} />
                  </Link>
                ) : tool.isCalculator ? (
                  <button
                    onClick={() => setActiveCalculator(activeCalculator === tool.isCalculator ? null : tool.isCalculator!)}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-champagne transition-colors"
                  >
                    {activeCalculator === tool.isCalculator ? 'Close' : 'Use Tool'} <ArrowRight size={14} />
                  </button>
                ) : null
              ) : (
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground/50 italic">
                  <Lock size={14} /> Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>

        {activeCalculator === 'mortgage' && (
          <div ref={mortgageRef as React.RefObject<HTMLDivElement>}>
            <MortgageCalculator />
          </div>
        )}
        {activeCalculator === 'affordability' && (
          <div ref={affordabilityRef as React.RefObject<HTMLDivElement>}>
            <AffordabilityCalculator />
          </div>
        )}
        {activeCalculator === 'rentvsbuy' && (
          <div ref={rentVsBuyRef as React.RefObject<HTMLDivElement>}>
            <RentVsBuyCalculator />
          </div>
        )}
      </div>
    </section>
  );
}

function MortgageCalculator() {
  return (
    <div className="bg-secondary border border-black/10 p-2 mb-16 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="bg-white border border-black/10 overflow-hidden">
        <iframe
          src="https://bit.ly/calculate-mortgage"
          width="100%"
          height="600"
          frameBorder="0"
          title="Mortgage Calculator"
          className="w-full"
          style={{ minHeight: '600px' }}
        />
      </div>
    </div>
  );
}

function AffordabilityCalculator() {
  const [inputs, setInputs] = useState({
    income: 100000,
    debts: 500,
    downPayment: 50000,
    interestRate: 6.8,
    loanTerm: 30,
  });
  const [results, setResults] = useState<{ maxPrice: number; monthlyPayment: number } | null>(null);

  const calculate = () => {
    const monthlyIncome = inputs.income / 12;
    const monthlyDebts = inputs.debts;
    
    // Using 28/36 rule (simplified)
    const maxMonthlyHousing = Math.min(
      monthlyIncome * 0.28,
      (monthlyIncome * 0.36) - monthlyDebts
    );

    const monthlyRate = inputs.interestRate / 100 / 12;
    const numPayments = inputs.loanTerm * 12;
    
    const maxLoan = maxMonthlyHousing * ((Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments)));
    const maxPrice = maxLoan + inputs.downPayment;

    setResults({
      maxPrice: Math.round(maxPrice),
      monthlyPayment: Math.round(maxMonthlyHousing),
    });
  };

  return (
    <div className="bg-secondary border border-black/10 p-8 mb-16 animate-in fade-in slide-in-from-top-4 duration-500">
      <h3 className="text-display text-2xl mb-6">Home Affordability Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Annual Income ($)</label>
              <input
                type="number"
                value={inputs.income}
                onChange={(e) => setInputs({ ...inputs, income: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Monthly Debts ($)</label>
              <input
                type="number"
                value={inputs.debts}
                onChange={(e) => setInputs({ ...inputs, debts: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Down Payment ($)</label>
              <input
                type="number"
                value={inputs.downPayment}
                onChange={(e) => setInputs({ ...inputs, downPayment: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={inputs.interestRate}
                onChange={(e) => setInputs({ ...inputs, interestRate: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Loan Term (Years)</label>
            <select
              value={inputs.loanTerm}
              onChange={(e) => setInputs({ ...inputs, loanTerm: Number(e.target.value) })}
              className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
            >
              <option value={15}>15 Years</option>
              <option value={30}>30 Years</option>
            </select>
          </div>
          <button
            onClick={calculate}
            className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-all"
          >
            Calculate
          </button>
        </div>

        <div className="flex flex-col justify-center border border-black/5 bg-white p-8">
          {results ? (
            <div className="animate-in fade-in duration-700">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Estimated Max Home Price</p>
                <p className="text-5xl font-light text-black">${results.maxPrice.toLocaleString()}</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-black/5 pb-2">
                  <span className="text-sm text-muted-foreground">Est. Total Monthly Payment</span>
                  <span className="text-xl font-medium">${results.monthlyPayment.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  *Estimate based on the 28/36 rule, assuming housing costs remain below 28% of gross monthly income.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calculator size={48} className="mx-auto text-black/5 mb-4" />
              <p className="text-muted-foreground italic">Enter your details and click calculate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RentVsBuyCalculator() {
  const [inputs, setInputs] = useState({
    monthlyRent: 2000,
    purchasePrice: 400000,
    downPaymentPercent: 20,
    interestRate: 6.8,
    years: 10,
  });
  const [results, setResults] = useState<{ totalRent: number; totalMortgage: number; equityBuilt: number; netCostBuy: number; netCostRent: number; difference: number; advantage: 'buy' | 'rent' } | null>(null);

  const calculate = () => {
    const years = inputs.years;
    const totalRent = inputs.monthlyRent * 12 * years;
    
    const downPayment = inputs.purchasePrice * (inputs.downPaymentPercent / 100);
    const loanAmount = inputs.purchasePrice - downPayment;
    const monthlyRate = inputs.interestRate / 100 / 12;
    const numPayments = 30 * 12; // Assume 30 year mortgage
    const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const totalMortgage = monthlyMortgage * 12 * years;
    
    // 3% Annual Appreciation
    const propertyValueAfterYears = inputs.purchasePrice * Math.pow(1.03, years);
    
    // Remaining Loan Balance
    const remainingBalance = loanAmount * (Math.pow(1 + monthlyRate, numPayments) - Math.pow(1 + monthlyRate, years * 12)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const equityBuilt = propertyValueAfterYears - remainingBalance;
    
    const maintenance = inputs.purchasePrice * 0.01 * years;
    
    // Net cost of buying = out of pocket - equity
    const netCostBuy = (downPayment + totalMortgage + maintenance) - equityBuilt;
    const netCostRent = totalRent;

    setResults({
      totalRent: Math.round(totalRent),
      totalMortgage: Math.round(totalMortgage),
      equityBuilt: Math.round(equityBuilt),
      netCostBuy: Math.round(netCostBuy),
      netCostRent: Math.round(netCostRent),
      difference: Math.round(Math.abs(netCostRent - netCostBuy)),
      advantage: netCostBuy < netCostRent ? 'buy' : 'rent'
    });
  };

  return (
    <div className="bg-secondary border border-black/10 p-8 mb-16 animate-in fade-in slide-in-from-top-4 duration-500">
      <h3 className="text-display text-2xl mb-6">Rent vs. Buy Wealth Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Monthly Rent ($)</label>
              <input
                type="number"
                value={inputs.monthlyRent}
                onChange={(e) => setInputs({ ...inputs, monthlyRent: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Purchase Price ($)</label>
              <input
                type="number"
                value={inputs.purchasePrice}
                onChange={(e) => setInputs({ ...inputs, purchasePrice: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Down Payment (%)</label>
              <input
                type="number"
                value={inputs.downPaymentPercent}
                onChange={(e) => setInputs({ ...inputs, downPaymentPercent: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={inputs.interestRate}
                onChange={(e) => setInputs({ ...inputs, interestRate: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Years to Compare</label>
            <select
              value={inputs.years}
              onChange={(e) => setInputs({ ...inputs, years: Number(e.target.value) })}
              className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
            >
              <option value={5}>5 Years</option>
              <option value={10}>10 Years</option>
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
            </select>
          </div>
          <button
            onClick={calculate}
            className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-all"
          >
            Calculate Wealth Impact
          </button>
        </div>

        <div className="flex flex-col justify-center border border-black/5 bg-white p-8">
          {results ? (
            <div className="animate-in fade-in duration-700">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Total Rent Paid (No Equity)</p>
                  <p className="text-2xl font-light text-black">${results.totalRent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Total Mortgage Paid</p>
                  <p className="text-2xl font-light text-black">${results.totalMortgage.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-emerald-600 mb-1 font-medium">Estimated Equity Built</p>
                  <p className="text-2xl font-medium text-emerald-700">+${results.equityBuilt.toLocaleString()}</p>
                </div>
                
                <div className="pt-4 border-t border-black/5">
                  <p className="text-sm font-medium mb-2 text-champagne">
                    {results.advantage === 'buy'
                      ? `Buying is the better financial decision, saving you $${results.difference.toLocaleString()} in net costs over ${inputs.years} years.`
                      : `Renting is more cost-effective by $${results.difference.toLocaleString()} over ${inputs.years} years.`
                    }
                  </p>
                  {results.advantage === 'buy' && (
                    <p className="text-sm text-muted-foreground italic">
                      By buying, you could build approximately ${results.equityBuilt.toLocaleString()} in equity over {inputs.years} years (assuming a conservative 3% annual appreciation).
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calculator size={48} className="mx-auto text-black/5 mb-4" />
              <p className="text-muted-foreground italic">Enter your details and click calculate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  return (
    <section className="py-24 bg-secondary" id="faq">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <HelpCircle size={32} strokeWidth={1.5} className="text-champagne mx-auto mb-4" />
          <h2 className="text-display text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Common questions from buyers and sellers</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('buyer')}
            className={`px-6 py-3 text-sm uppercase tracking-widest transition-colors ${
              activeTab === 'buyer' ? 'bg-black text-white' : 'bg-white border border-black/20 hover:border-black'
            }`}
          >
            Buyer FAQs
          </button>
          <button
            onClick={() => setActiveTab('seller')}
            className={`px-6 py-3 text-sm uppercase tracking-widest transition-colors ${
              activeTab === 'seller' ? 'bg-black text-white' : 'bg-white border border-black/20 hover:border-black'
            }`}
          >
            Seller FAQs
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          {(activeTab === 'buyer' ? buyerFaqs : sellerFaqs).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container-narrow text-center">
        <h2 className="text-display text-4xl md:text-5xl mb-6">Still Have Questions?</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Real estate can be complicated. I'm here to answer your questions and guide you 
          through every step of the process.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-champagne transition-colors"
        >
          Ask Me Anything
        </Link>
      </div>
    </section>
  );
}
