import { useForm } from 'react-hook-form'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/fashionforward', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/fashionforward', icon: '👥' },
    { name: 'Twitter', url: 'https://twitter.com/fashionforward', icon: '🐦' },
    { name: 'Email', url: 'mailto:info@fashionforward.usd.edu', icon: '✉️' },
  ]

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with actual API call or Formspree integration)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-muted-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-600 max-w-2xl mx-auto text-balance">
            Have questions, ideas, or want to get involved? We'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-warm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-display font-semibold text-muted-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-muted-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-muted-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-muted-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-muted-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm"
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                >
                  ✗ Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-soft rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-semibold text-muted-900 mb-6">
                Connect With Us
              </h3>
              <p className="text-muted-600 mb-6 leading-relaxed">
                Follow us on social media to stay updated on events, workshops, and sustainability initiatives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all shadow-sm"
                  >
                    <span className="text-3xl mb-2">{social.icon}</span>
                    <span className="text-sm font-medium text-muted-700">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-display font-semibold text-muted-900 mb-4">
                Visit Us
              </h3>
              <div className="space-y-3 text-muted-600">
                <p className="flex items-start">
                  <span className="mr-3">📍</span>
                  <span>University of San Diego<br />Student Center<br />San Diego, CA</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span>info@fashionforward.usd.edu</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📱</span>
                  <span>(619) 260-XXXX</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

