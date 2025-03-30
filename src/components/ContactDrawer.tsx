"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Input,
  Textarea,
  addToast,
} from "@heroui/react";

const ContactDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwplebo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        addToast({
          title: "Message sent!",
          description: "Thanks for your message. I’ll get back to you soon.",
        });

        form.reset();
        closeDrawer();
      } else {
        addToast({
          title: "Oops!",
          description: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      addToast({
        title: "Network Error",
        description: "Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={openDrawer}
        className="rounded-full bg-[--color-accent] text-[#ECECEC] px-6 py-2 hover:bg-opacity-80 transition"
      >
        Say Hello!
      </Button>

      <Drawer isOpen={isOpen} onOpenChange={setIsOpen} placement="right" size="2xl">
        <DrawerContent className="bg-[--color-bg] text-[--color-text]">
          <DrawerHeader>
            <h2 className="text-2xl font-bold">Send me a message</h2>
          </DrawerHeader>

          <form onSubmit={handleSubmit}>
            <DrawerBody className="flex flex-col gap-4">
              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Your Email" required />
              <Textarea name="message" placeholder="Your Message..." rows={7} required />
            </DrawerBody>

            <DrawerFooter>
              <Button
                type="submit"
                isLoading={loading}
                className="bg-[--color-accent] text-white w-full"
              >
                Send
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ContactDrawer;
