"use client";
import Section from "@/components/composed/section";
import fetchAPI, { CONTACT_DETAIL_API } from "@/lib/api";
import { ContactInfoType } from "@/lib/api.types";
import handleContactData from "@/lib/contact_form";
import { motion } from "framer-motion";
import { Linkedin, LucideIcon, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

type iconByLabel = Record<string, LucideIcon>;

type submitStatusType = {
  status: string;
  message: string;
}

const ICON_BY_LABEL: iconByLabel = {
  Twitter: Twitter,
  LinkedIn: Linkedin
};

export default function ContactPage() {
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<submitStatusType | null>(null);

  return (
    <Section
      variant="top"
      className="min-h-screen bg-gradient-to-b from-white to-teal-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left sm:text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Get in touch with our team - we&apos;re happy to help!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 min-[990px]:grid-cols-2 gap-6 lg:gap-12 sm:max-w-[640px] sm:mx-auto min-[990px]:max-w-none">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>

            {submitStatus !== null && (submitStatus?.status == 'success' ? (
              <div className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-3 rounded mb-6">
                {submitStatus.message}
              </div>
            ) :
              (
                <div className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-3 rounded mb-6">
                  {submitStatus.message}
                </div>
              ))
            }

            <form onSubmit={handleSubmit(async (data) => {
              setIsSubmitting(true);
              const response = await handleContactData(data);
              setSubmitStatus(response);
              setIsSubmitting(false);
            })} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {
                  ...register('name', {
                    required: 'This field is required'
                  })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {
                  ...register('email', {
                    required: 'This field is required'
                  })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {
                  ...register('phone', {
                    required: 'This field is required'
                  })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  {
                  ...register('city', {
                    required: 'This field is required'
                  })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  {
                  ...register('message', {
                    required: 'This field is required'
                  })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="How can we help you?"></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg`}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-10 border border-teal-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our information
            </h2>
            <ContactDetails />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ContactDetails() {
  const [contactData, setContactData] = useState<ContactInfoType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetchAPI<ContactInfoType>(CONTACT_DETAIL_API, true);
        setContactData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const whatsappNumber = contactData?.phoneNumber.find(
    (phone) => phone.type === "Whatsapp"
  );
  const callNumber = contactData?.phoneNumber.find(
    (phone) => phone.type === "Call"
  );

  if (error) {
    return (
      <div className="text-red-500">Error: {error}</div>
    )
  }

  if (isLoading) {
    return (
      <div className="animate-pulse text-teal-600">
        Loading contact information...
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Email */}
      {
        contactData?.email && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-2">
            <div className="bg-white p-3 rounded-full text-teal-600 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <a
                href={`mailto:${contactData?.email}`}
                className="hover:text-teal-600 transition-colors break-all">
                {contactData?.email}
              </a>
            </div>
          </motion.div>
        )
      }

      {/* WhatsApp */}
      {whatsappNumber && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full text-teal-600 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              WhatsApp
            </h3>
            <a
              href={`https://wa.me/91${whatsappNumber.phoneNumber}`}
              className="hover:text-teal-600 transition-colors">
              +91 {whatsappNumber.phoneNumber}
            </a>
          </div>
        </motion.div>
      )}

      {/* Phone */}
      {callNumber && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full text-teal-600 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Phone
            </h3>
            <a
              href={`tel:+91-${callNumber.phoneNumber}`}
              className="hover:text-teal-600 transition-colors">
              +91-{callNumber.phoneNumber}
            </a>
          </div>
        </motion.div>
      )}

      {/* Address */}
      {contactData?.address && contactData.address.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full text-teal-600 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Office
            </h3>
            <p className="text-gray-600 mt-1">
              {contactData.address.map((item) => (
                <React.Fragment key={item.id}>
                  {item.listItem}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </motion.div>
      )}

      {/* Social Media */}
      {
        contactData?.socials.socialLink.length && contactData?.socials.socialLink.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow us
            </h3>
            <div className="flex gap-4">
              {
                contactData?.socials.socialLink.map(({ href, label }, idx) => {
                  const Icon = ICON_BY_LABEL[label];
                  return (
                    <Link key={idx} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition hover:text-teal-500">
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })
              }
            </div>
          </motion.div>
        )
      }
    </div>
  );
}