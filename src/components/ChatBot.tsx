import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Heart, AlertTriangle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-hide tooltip after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 100000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false); // Hide tooltip when chat opens
    if (messages.length === 0) {
      // Add welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello, I'm here to provide gentle support during difficult times. I'm a compassionate listener, but please remember I'm not a licensed therapist. How are you feeling today?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowDisclaimer(true);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Build conversation context
      const conversationHistory = messages.map(msg => 
        `${msg.isUser ? 'User' : 'Assistant'}: ${msg.text}`
      ).join('\n');

      const prompt = `You are a gentle and compassionate grief support assistant. You listen empathetically, validate emotions, and offer comforting responses. You are not a licensed therapist and should avoid giving medical advice.

Guidelines:
- Be warm, empathetic, and understanding
- Validate feelings without judgment
- Ask gentle follow-up questions
- Offer comfort and hope when appropriate
- Remind of professional resources when needed
- Keep responses conversational and personal
- Vary your responses to avoid repetition

Previous conversation:
${conversationHistory}

User just said: "${currentInput}"

Please respond as a caring grief support companion:`;

      // Updated API call with current model name
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.8,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 512,
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error:', response.status, errorData);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      let botResponseText = "I'm here to listen and support you. Could you tell me more about what you're going through?";
      
      if (data.candidates && 
          data.candidates.length > 0 && 
          data.candidates[0].content && 
          data.candidates[0].content.parts && 
          data.candidates[0].content.parts.length > 0 &&
          data.candidates[0].content.parts[0].text) {
        botResponseText = data.candidates[0].content.parts[0].text.trim();
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Provide contextual error responses
      let errorResponse = "I'm having trouble connecting right now, but I want you to know that your feelings are valid. Please consider reaching out to a mental health professional or crisis helpline if you need immediate support.";
      
      const lowerInput = currentInput.toLowerCase();
      if (lowerInput.includes('depression') || lowerInput.includes('depressed')) {
        errorResponse = "I hear that you're struggling with depression. While I'm having connection issues, please know that what you're feeling is valid. Consider reaching out to a mental health professional, trusted friend, or crisis helpline. You don't have to go through this alone.";
      } else if (lowerInput.includes('anxiety') || lowerInput.includes('anxious')) {
        errorResponse = "I understand that anxiety can be overwhelming. While I'm experiencing technical difficulties, please remember there are people who want to help. Consider speaking with a counselor or calling a support line.";
      } else if (lowerInput.includes('grief') || lowerInput.includes('loss') || lowerInput.includes('died') || lowerInput.includes('death')) {
        errorResponse = "I'm sorry for your loss. Even though I'm having connection issues, please know that grief is natural and you don't have to face it alone. Consider reaching out to a grief counselor or support group.";
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <motion.button
          className="w-16 h-16 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          onClick={handleOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: isOpen ? "0 0 0 4px rgba(244, 63, 94, 0.3)" : "0 4px 14px 0 rgba(0, 0, 0, 0.3)"
          }}
        >
          <MessageCircle className="w-8 h-8" />
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.button>
        
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className="absolute bottom-20 right-0 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm font-medium">Need someone to talk to?</p>
              <p className="text-xs text-slate-300">Chat with your grief supporter</p>
              {/* Arrow */}
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-slate-800 p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Grief Support</h3>
                  <p className="text-xs text-slate-300">Here to listen</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Disclaimer */}
            <AnimatePresence>
              {showDisclaimer && (
                <motion.div
                  className="bg-amber-50 border-b border-amber-200 p-3"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-amber-700 leading-relaxed">
                        This is a supportive chat, not professional therapy. If you're in crisis, 
                        please contact emergency services or a crisis helpline immediately.
                      </p>
                      <button
                        onClick={() => setShowDisclaimer(false)}
                        className="text-xs text-amber-600 hover:text-amber-800 mt-1 underline"
                      >
                        I understand
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-rose-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share what's on your heart..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all duration-300 text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 bg-rose-500 hover:bg-rose-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;