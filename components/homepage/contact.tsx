"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data:any) => {
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message successfully sent!");
      } else {
        alert("Error! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact-us" className="text-heading body-font relative">
      <div className="container px-4 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 mx-auto bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-heading">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-heading">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-heading"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <input
              type="submit"
              value="Send Message"
              className="text-white hover:text-primary bg-primary border-2 border-primary py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg cursor-pointer"
            />

            <p className="text-xs text-gray-500 mt-3">
              All inquiries will be addressed within 24 hours by a Tempire®
              representative.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
