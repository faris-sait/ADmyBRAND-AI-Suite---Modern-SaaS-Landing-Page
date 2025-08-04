'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      reset();
      alert('Thank you for your message! We\'ll get back to you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your marketing with AI? Let's discuss how ADmyBRAND AI Suite
            can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto" padding="lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  error={errors.name?.message}
                  required
                  {...register('name')}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  error={errors.email?.message}
                  required
                  {...register('email')}
                />
              </div>

              <Input
                label="Company Name"
                placeholder="Your Company"
                error={errors.company?.message}
                required
                {...register('company')}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={`
                    w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                    ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
                    placeholder-gray-400 text-gray-900 resize-none
                  `}
                  placeholder="Tell us about your marketing goals and how we can help..."
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                className="w-full"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Prefer to reach out directly?</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@admybrand.com"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  hello@admybrand.com
                </a>
                <a
                  href="tel:+1-555-123-4567"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;