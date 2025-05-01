"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const whatsappNumber = "+923118203633"
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Reset form and show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message (max 200 words)
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full min-h-[150px]"
          />
        </div>

        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        {isSubmitted && (
          <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md text-center">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </form>

      <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <MessageSquare className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold">WhatsApp Support</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          For immediate assistance, you can also reach us directly on WhatsApp. Our team is available during business
          hours to respond to your queries.
        </p>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={() => window.open(`https://wa.me/923118203633`, "_blank")}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat on WhatsApp
        </Button>
      </div>
    </>
  )
}
