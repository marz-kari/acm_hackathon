import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      title: 'Community',
      description: 'Building connections and fostering creativity within the USD community.',
      icon: '🤝',
    },
    {
      title: 'Sustainability',
      description: 'Promoting eco-conscious fashion practices and environmental responsibility.',
      icon: '🌱',
    },
    {
      title: 'Self-Expression',
      description: 'Empowering individuals to express their unique identity through fashion.',
      icon: '✨',
    },
  ]

  const stats = [
    { number: '500+', label: 'Community Members' },
    { number: '50+', label: 'Events Hosted' },
    { number: '30+', label: 'Workshops' },
    { number: '100%', label: 'Sustainable Focus' },
  ]

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-muted-900 mb-6">
            About Fashion Forward
          </h2>
          <p className="text-xl sm:text-2xl text-muted-600 max-w-3xl mx-auto text-balance mb-4">
            Cultivating Creative Community at USD through Fashion, Sustainability, and Self-Expression.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-lg">
            <h3 className="text-3xl font-display font-semibold text-muted-900 mb-6">
              Our Mission
            </h3>
            <p className="text-muted-700 leading-relaxed text-lg mb-4">
              Fashion Forward is dedicated to creating a vibrant, inclusive community at the University of San Diego
              where students can explore their passion for fashion while making a positive impact on the environment.
            </p>
            <p className="text-muted-700 leading-relaxed text-lg">
              We believe that fashion is a powerful form of self-expression and a catalyst for change. Through our
              events, workshops, and initiatives, we empower our members to embrace sustainable practices and celebrate
              their unique style.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-md text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-display font-semibold text-muted-900 mb-3">
                {value.title}
              </h4>
              <p className="text-muted-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

