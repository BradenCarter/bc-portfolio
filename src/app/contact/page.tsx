'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, ClockIcon } from '@radix-ui/react-icons';
import ButtonFoundation from '@/components/ui/ButtonFoundation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState('submitting');

    // Replace with your actual form submission logic
    // For now, this is a placeholder
    console.log('Form data:', data);
    
    setTimeout(() => {
      setFormState('success');
      reset();
    }, 1000);
  };

  return (
    <main className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-xl max-w-3xl">
            Interested in working together? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6 text-theme-color-blue">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <EnvelopeClosedIcon className="w-6 h-6 text-primary" color='white' />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:bradencarter@outlook.com"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    bradencarter@outlook.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <LinkedInLogoIcon className="w-6 h-6 text-primary" color='white' />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/bradencarter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    linkedin.com/in/bradencarter
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <GitHubLogoIcon className="w-6 h-6 text-primary" color='white' />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">GitHub</h3>
                  <a
                    href="https://github.com/bradencarter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    github.com/bradencarter
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex gap-4 pt-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-primary" color='white' />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Response Time</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    I typically respond to messages within 24-48 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className='text-theme-color-mint'>Name</Label>
                <Input
                  type="text"
                  id="name"
                  {...register('name')}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className='text-theme-color-mint'>Email</Label>
                <Input
                  type="email"
                  id="email"
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className='text-theme-color-mint'>Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className='text-theme-color-mint'>Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  className="resize-none"
                  {...register('message')}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <ButtonFoundation
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </ButtonFoundation>

              {formState === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {formState === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
