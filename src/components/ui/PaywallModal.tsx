'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  X,
  CreditCard,
  Smartphone,
  ExternalLink,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { PaywallModalProps, PaymentFormData } from '@/types';
import Button from './Button';
import Input from './Input';
import Card from './Card';

const paymentSchema = z.object({
  cardNumber: z.string().optional().refine((val) => {
    if (!val) return true;
    const cleaned = val.replace(/\s/g, '');
    return cleaned.length >= 13 && cleaned.length <= 19;
  }, 'Card number must be 13-19 digits'),
  expiry: z.string().optional().refine((val) => {
    if (!val) return true;
    return /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
  }, 'Format: MM/YY'),
  cvv: z.string().optional().refine((val) => {
    if (!val) return true;
    return val.length >= 3 && val.length <= 4;
  }, 'CVV must be 3-4 digits'),
  upiId: z.string().optional().refine((val) => {
    if (!val) return true;
    return val.includes('@');
  }, 'Please enter a valid UPI ID')
});

const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  selectedPlan
}) => {
  const [activeTab, setActiveTab] = useState<'card' | 'upi' | 'paypal'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema)
  });

  const handlePayment = async (data: PaymentFormData) => {
    setIsSubmitting(true);
    setPaymentStatus('idle');
    setErrorMessage('');

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Simulate random success/failure for demo
      const success = Math.random() > 0.3;

      if (success) {
        setPaymentStatus('success');
        setTimeout(() => {
          onClose();
          reset();
          setPaymentStatus('idle');
        }, 2000);
      } else {
        setPaymentStatus('error');
        setErrorMessage('Payment failed. Please check your details and try again.');
      }
    } catch (error) {
      setPaymentStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePayPal = async () => {
    setIsSubmitting(true);
    setPaymentStatus('idle');

    try {
      // Open PayPal login page in a new tab
      const paypalUrl = 'https://www.paypal.com/signin';
      window.open(paypalUrl, '_blank', 'noopener,noreferrer');

      // Simulate payment completion after user returns
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPaymentStatus('success');
      setTimeout(() => {
        onClose();
        setPaymentStatus('idle');
      }, 2000);
    } catch (error) {
      setPaymentStatus('error');
      setErrorMessage('PayPal payment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUPIPayment = async () => {
    setIsSubmitting(true);
    setPaymentStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 2500));
      const success = Math.random() > 0.2;

      if (success) {
        setPaymentStatus('success');
        setTimeout(() => {
          onClose();
          setPaymentStatus('idle');
        }, 2000);
      } else {
        setPaymentStatus('error');
        setErrorMessage('UPI payment failed. Please check your UPI ID and try again.');
      }
    } catch (error) {
      setPaymentStatus('error');
      setErrorMessage('UPI payment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Complete Purchase</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Plan Summary */}
            <Card className="mb-6" padding="sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedPlan.name} Plan</h3>
                  <p className="text-sm text-gray-600">
                    {selectedPlan.period === 'trial' ? 'Free for 7 days, then billed monthly' :
                     selectedPlan.period === 'year' ? 'Annual subscription' : 'Monthly subscription'}
                  </p>
                </div>
                <div className="text-right">
                  {selectedPlan.period === 'trial' ? (
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">FREE</div>
                      <div className="text-sm text-gray-600">7 days</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        ${selectedPlan.price}
                      </div>
                      <div className="text-sm text-gray-600">/{selectedPlan.period || 'month'}</div>
                    </div>
                  )}
                </div>
              </div>
              {selectedPlan.period === 'trial' && (
                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>What happens after 7 days?</strong><br />
                    You'll be automatically enrolled in the Professional plan at $79/month.
                    Cancel anytime during your trial with no charges.
                  </p>
                </div>
              )}
            </Card>

            {/* Payment Status Messages */}
            <AnimatePresence>
              {paymentStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-emerald-800">Payment Successful!</p>
                    <p className="text-sm text-emerald-600">Welcome to {selectedPlan.name}!</p>
                  </div>
                </motion.div>
              )}

              {paymentStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium text-red-800">Payment Failed</p>
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Payment Method Tabs */}
            <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
              {[
                { id: 'card', label: 'Card', icon: CreditCard },
                { id: 'upi', label: 'UPI', icon: Smartphone },
                { id: 'paypal', label: 'PayPal', icon: ExternalLink }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`
                    flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium transition-all
                    ${activeTab === id
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Payment Forms */}
            <div className="space-y-4">
              {activeTab === 'card' && (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmit(handlePayment)}
                  className="space-y-4"
                >
                  <Input
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                    error={errors.cardNumber?.message}
                    {...register('cardNumber')}
                    onChange={(e) => {
                      const formatted = formatCardNumber(e.target.value);
                      e.target.value = formatted;
                    }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Expiry"
                      placeholder="MM/YY"
                      error={errors.expiry?.message}
                      {...register('expiry')}
                      onChange={(e) => {
                        const formatted = formatExpiry(e.target.value);
                        e.target.value = formatted;
                      }}
                    />
                    <Input
                      label="CVV"
                      placeholder="123"
                      maxLength={4}
                      error={errors.cvv?.message}
                      {...register('cvv')}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    loading={isSubmitting}
                    disabled={paymentStatus === 'success'}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      selectedPlan.period === 'trial' ? 'Start Free Trial' : 'Complete Purchase'
                    )}
                  </Button>
                </motion.form>
              )}

              {activeTab === 'upi' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <Input
                    label="UPI ID"
                    placeholder="yourname@paytm"
                    type="email"
                    {...register('upiId')}
                    error={errors.upiId?.message}
                  />
                  <Button
                    size="lg"
                    loading={isSubmitting}
                    disabled={paymentStatus === 'success'}
                    onClick={handleUPIPayment}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      selectedPlan.period === 'trial' ? 'Start Free Trial' : 'Pay with UPI'
                    )}
                  </Button>
                </motion.div>
              )}

              {activeTab === 'paypal' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      {selectedPlan.period === 'trial'
                        ? 'Click below to start your free trial with PayPal verification.'
                        : 'Click below to open PayPal in a new tab and complete your payment securely.'
                      }
                    </p>
                  </div>
                  <Button
                    size="lg"
                    loading={isSubmitting}
                    disabled={paymentStatus === 'success'}
                    onClick={handlePayPal}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Redirecting...
                      </>
                    ) : (
                      selectedPlan.period === 'trial' ? 'Start Free Trial' : 'Continue with PayPal'
                    )}
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Security Notice */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                🔒 Your information is encrypted and secure.
                {selectedPlan.period === 'trial'
                  ? ' No charges during your 7-day trial period.'
                  : ' We never store your card details.'
                }
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PaywallModal;