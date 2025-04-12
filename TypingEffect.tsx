import React, { useEffect, useState } from 'react';

const TypingEffect: React.FC = () => {
  const phrases = ['coder.', 'designer.'];
  const [text, setText] = useState("We are");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const typingSpeed = isDeleting ? 60 : 100;

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const fullText = `We are ${currentPhrase}`;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        if (text === "We are") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="text-center">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-r-2 border-gray-600 dark:border-gray-400 pr-2 whitespace-nowrap inline-block">
          {text}
        </span>
      </div>
    </div>
  );
};

export default TypingEffect; 
