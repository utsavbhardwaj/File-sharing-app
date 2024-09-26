'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-blue-400 bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-white" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-blue-300 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg">
          <p className="text-blue-100">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const faqs = [
    {
      question: "How secure is my data on your platform?",
      answer: "We use bank-level encryption to protect your data. All files are encrypted both in transit and at rest, ensuring maximum security for your sensitive information."
    },
    {
      question: "Can I share files with people who don't have an account?",
      answer: "Yes! You can generate shareable links for your files that can be accessed by anyone, even if they don't have an account on our platform."
    },
    {
      question: "What's the maximum file size I can upload?",
      answer: "Our Free plan allows uploads of up to 2MB per file. For larger file sizes, check out our premium plans which offer uploads of up to 10GB per file."
    },
    {
      question: "How long are my shared files available?",
      answer: "By default, shared files remain available for 30 days. However, you can set custom expiration dates or make files available indefinitely if needed."
    },
    {
      question: "Can I password protect my shared files?",
      answer: "When sharing a file, you have the option to set a password. The recipient will need this password to access the file, adding an extra layer of security."
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#142142' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-blue-200 mb-4">Still have questions?</p>
          <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}