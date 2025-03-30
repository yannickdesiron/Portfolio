"use client";

import React, { useState } from "react";
import { Input, Textarea, Button, Card, Accordion, AccordionItem } from "@heroui/react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-[--color-text]">
      <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center max-w-md">
        I&apos;d love to hear from you. Whether it&apos;s a question, feedback, or just a hello — drop me a message!
      </p>
      <p className="italic text-[--color-accent] text-sm mb-8 text-center">
        &quot;Every connection is a new possibility.&quot;
      </p>

      <Card className="w-full max-w-screen-md p-6 bg-[--color-bg] shadow-xl border-[--color-accent]/30 mb-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            isRequired
            variant="bordered"
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            isRequired
            variant="bordered"
          />
          <Textarea
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            isRequired
            variant="bordered"
            className="resize-none"
          />
          <Button
            type="submit"
            className="bg-[--color-accent] text-white hover:bg-opacity-90 transition"
          >
            Send Message
          </Button>
        </form>
        {submitted && (
          <p className="mt-4 text-sm text-[--color-accent]">Thank you! Your message has been sent.</p>
        )}
      </Card>

      <div className="w-full max-w-2xl">
        <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
        <Accordion variant="light" className="w-full">
          <AccordionItem key="1" aria-label="Do you take freelance work?" title="Do you take freelance work?">
            Absolutely! I’m always open to exciting freelance opportunities.
          </AccordionItem>
          <AccordionItem key="2" aria-label="How can I hire you for a project?" title="How can I hire you for a project?">
            Just send me a message using the form above or connect with me on LinkedIn.
          </AccordionItem>
          <AccordionItem key="3" aria-label="What technologies do you specialize in?" title="What technologies do you specialize in?">
            I specialize in React, Next.js, ASP.NET, Tailwind CSS, and more!
          </AccordionItem>
          <AccordionItem key="4" aria-label="Do you offer consultation calls?" title="Do you offer consultation calls?">
            Yes! Just drop a message and we can schedule something that works for both.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ContactPage;
