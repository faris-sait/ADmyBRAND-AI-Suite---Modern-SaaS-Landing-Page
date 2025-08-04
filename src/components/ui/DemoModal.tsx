'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import Card from './Card';

const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid work email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time')
});

type DemoFormData = z.infer<typeof demoSchema>;

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema)
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Demo scheduled:', data);
      setIsSubmitted(true);

      // Auto close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Demo scheduling error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    reset();
    onClose();
  };

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Schedule Demo Call</h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto pr-2">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      error={errors.name?.message}
                      required
                      {...register('name')}
                    />
                    <Input
                      label="Work Email"
                      type="email"
                      placeholder="john@company.com"
                      error={errors.email?.message}
                      required
                      {...register('email')}
                    />
                    <Input
                      label="Company Name"
                      placeholder="Your Company"
                      error={errors.company?.message}
                      required
                      {...register('company')}
                    />
                  </div>

                  {/* Date and Time Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Select Date & Time</h3>

                    {/* Date Selection */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Preferred Date <span className="text-red-500 ml-1">*</span>
                      </label>
                      <select
                        {...register('date')}
                        className={`
                          w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                          ${errors.date ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
                          text-gray-900
                        `}
                      >
                        <option value="">Select a date</option>
                        {availableDates.map((date, index) => (
                          <option key={index} value={date.toISOString().split('T')[0]}>
                            {date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </option>
                        ))}
                      </select>
                      {errors.date && (
                        <p className="text-sm text-red-600">{errors.date.message}</p>
                      )}
                    </div>

                    {/* Time Selection */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Preferred Time <span className="text-red-500 ml-1">*</span>
                      </label>
                      <select
                        {...register('time')}
                        className={`
                          w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                          ${errors.time ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
                          text-gray-900
                        `}
                      >
                        <option value="">Select a time</option>
                        {availableTimes.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-sm text-red-600">{errors.time.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Demo Information */}
                  <Card className="bg-blue-50/50 border-blue-200" padding="sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-1">What to Expect</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• 30-minute personalized demo</li>
                          <li>• Live Q&A with our product expert</li>
                          <li>• Custom pricing discussion</li>
                          <li>• Implementation roadmap</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Button
                    type="submit"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Booking Demo...' : 'Book Demo'}
                  </Button>
                </form>
              ) : (
                /* Confirmation Message */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Demo Scheduled Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for scheduling a demo with us. You'll receive a calendar invitation
                    and confirmation email shortly.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">What's Next?</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Our team will send you a calendar invite and preparation materials
                      within the next hour.
                    </p>
                  </div>
                  <Button onClick={handleClose} variant="outline">
                    Close
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;