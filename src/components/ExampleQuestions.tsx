import React from 'react';
import { motion } from 'framer-motion';

const exampleQuestions = [
  "What services do you offer?",
  "How can I get started with your solutions?",
  "What makes your approach unique?",
  "Can you share some success stories?",
  "What are your pricing options?"
];

const ExampleQuestions = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-300 mb-4">Example questions you can ask:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {exampleQuestions.map((question, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#007BFF]/50 transition-colors cursor-pointer"
            whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)' }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              // Auto-fill the message input with the clicked question
              const messageInput = document.getElementById('message') as HTMLTextAreaElement;
              if (messageInput) {
                messageInput.value = question;
                messageInput.focus();
              }
            }}
          >
            <p className="text-sm text-gray-300">{question}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExampleQuestions;
