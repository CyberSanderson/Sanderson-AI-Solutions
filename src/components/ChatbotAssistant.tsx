import React, { useMemo, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  text: string;
  options?: string[];
}

type Step = 'qualify' | 'collectPhone' | 'collectName' | 'collectBusiness' | 'done';

type SolutionKey = 'serv-engines' | 'local-lead-bot' | 'sentient-prospect';

const optionLabels = [
  'Need a website or not showing on Google',
  'Missing calls or losing leads',
  'Want to scale B2B outreach'
];

const initialPrompt =
  'What is the biggest bottleneck in your business right now: getting found online, missing calls and leads, or scaling B2B outreach?';

const solutionCopy: Record<SolutionKey, string> = {
  'serv-engines':
    "It sounds like you need a solid digital foundation; we offer 'Serv Engines', which includes a full Google Business Profile optimization and a lightning-fast lead-gen website, with pricing at $495 one-time for the Google Profile or $299/month for a fully managed website build.",
  'local-lead-bot':
    "If you are missing calls while you are busy on the job, we need to plug that leak; we use 'Local Lead Bot Pro' to install an automated missed-call text-back system so you never lose a lead again, priced at $199/month.",
  'sentient-prospect':
    "Since your foundation is solid, you are ready for 'Sentient Prospect'; it is our advanced outbound AI machinery that hunts and qualifies B2B leads for you automatically, with custom high-ticket pricing based on volume."
};

function classifySolution(input: string): SolutionKey | 'unknown' {
  const text = input.toLowerCase();
  const hasWebsite = /website|site|google|seo|search|new business|startup|found online/.test(text);
  const hasMissedCalls = /missed|calls|leads|busy|voicemail|follow[- ]?up|text[- ]?back|inbound/.test(text);
  const hasScale = /b2b|contracts|outbound|scale|pipeline|prospecting|enterprise/.test(text);

  if (hasScale) return 'sentient-prospect';
  if (hasMissedCalls) return 'local-lead-bot';
  if (hasWebsite) return 'serv-engines';
  return 'unknown';
}

function id() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: id(),
      role: 'assistant',
      text: initialPrompt,
      options: optionLabels
    }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<Step>('qualify');
  const [leadData, setLeadData] = useState({
    name: '',
    business: '',
    phone: ''
  });

  const lastMessage = useMemo(() => messages[messages.length - 1], [messages]);

  const pushMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const pushAssistant = (text: string, options?: string[]) => {
    pushMessage({ id: id(), role: 'assistant', text, options });
  };

  const handleQualify = (response: string) => {
    const classification = classifySolution(response);
    if (classification === 'unknown') {
      pushAssistant(
        'Thanks. Which is the bigger issue right now: getting found online, missing calls and leads, or scaling B2B outreach?',
        optionLabels
      );
      return;
    }

    pushAssistant(
      `${solutionCopy[classification]} To get this fixed, what is the best phone number for our founder, Sanderson, to call you at tomorrow?`
    );
    setStep('collectPhone');
  };

  const handlePhone = (response: string) => {
    setLeadData((prev) => ({ ...prev, phone: response }));
    pushAssistant('Thanks. What is your full name?');
    setStep('collectName');
  };

  const handleName = (response: string) => {
    setLeadData((prev) => ({ ...prev, name: response }));
    pushAssistant('Got it. What is your business name?');
    setStep('collectBusiness');
  };

  const handleBusiness = (response: string) => {
    setLeadData((prev) => ({ ...prev, business: response }));
    pushAssistant(
      "Perfect. I've sent your details directly to Sanderson. He will review your business online and call you shortly to map out the next steps."
    );
    setStep('done');
  };

  const handleUserMessage = (text: string) => {
    if (!text.trim()) return;
    pushMessage({ id: id(), role: 'user', text });

    if (step === 'qualify') {
      handleQualify(text);
    } else if (step === 'collectPhone') {
      handlePhone(text);
    } else if (step === 'collectName') {
      handleName(text);
    } else if (step === 'collectBusiness') {
      handleBusiness(text);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    handleUserMessage(text);
    setInput('');
  };

  const handleOptionClick = (option: string) => {
    if (step !== 'qualify') return;
    handleUserMessage(option);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-gold-400 text-rich-black px-4 py-3 font-semibold uppercase tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-white transition-colors"
        aria-expanded={isOpen}
        aria-label="Open chat assistant"
      >
        {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
        <span className="text-xs">Assistant</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="mt-4 w-[min(420px,90vw)] max-h-[70vh] overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-2xl"
          >
            <div className="px-6 py-4 border-b border-white/10 bg-rich-black/80">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-400">Sanderson AI Assistant</p>
              <p className="text-xs text-white/60">Bronx, NY - Local Business Automation</p>
            </div>

            <div className="flex flex-col gap-4 px-6 py-5 overflow-y-auto max-h-[45vh]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === 'assistant'
                        ? 'bg-white/5 text-white/80 border border-white/10'
                        : 'bg-gold-400 text-rich-black'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {lastMessage?.role === 'assistant' && lastMessage.options && step === 'qualify' && (
                <div className="flex flex-col gap-2">
                  {lastMessage.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="w-full text-left px-4 py-2 rounded-xl border border-white/10 text-white/80 hover:border-gold-400/60 hover:text-gold-400 transition-colors text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-white/10 px-6 py-4 bg-rich-black/70">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={step === 'done' ? 'Conversation complete' : 'Type your response'}
                  disabled={step === 'done'}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-400/60"
                />
                <button
                  type="submit"
                  disabled={step === 'done'}
                  className="px-4 py-2 rounded-full bg-gold-400 text-rich-black text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
