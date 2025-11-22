import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Sustainability() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const initiatives = [
    {
      title: 'Upcycling Workshops',
      description:
        'We teach students how to transform old garments into new, stylish pieces, reducing waste and promoting creativity.',
      icon: '🔄',
      color: 'from-green-100 to-emerald-100',
    },
    {
      title: 'Sustainable Material Education',
      description:
        'Learn about organic cotton, recycled fabrics, and other eco-friendly materials that make a difference.',
      icon: '🌿',
      color: 'from-emerald-100 to-teal-100',
    },
    {
      title: 'Ethical Fashion Advocacy',
      description:
        'We raise awareness about fair labor practices and support brands that prioritize people and planet.',
      icon: '🤝',
      color: 'from-teal-100 to-cyan-100',
    },
    {
      title: 'Waste Reduction Programs',
      description:
        'Through clothing swaps and donation drives, we keep textiles out of landfills and in circulation.',
      icon: '♻️',
      color: 'from-cyan-100 to-blue-100',
    },
  ]

  const practices = [
    {
      step: '01',
      title: 'Awareness',
      description: 'Educating our community about the environmental impact of fast fashion.',
    },
    {
      step: '02',
      title: 'Action',
      description: 'Providing hands-on opportunities to practice sustainable fashion choices.',
    },
    {
      step: '03',
      title: 'Advocacy',
      description: 'Supporting and promoting brands and practices that prioritize sustainability.',
    },
    {
      step: '04',
      title: 'Impact',
      description: 'Measuring and celebrating our collective positive impact on the environment.',
    },
  ]

  return (
    <section id="sustainability" className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-muted-900 mb-6">
            Sustainability Initiatives
          </h2>
          <p className="text-xl text-muted-600 max-w-3xl mx-auto text-balance">
            We're committed to promoting eco-conscious fashion practices and making a positive environmental impact
            through education, action, and community engagement.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-gradient-to-br ${initiative.color} rounded-2xl p-8 shadow-lg`}
            >
              <div className="text-5xl mb-4">{initiative.icon}</div>
              <h3 className="text-2xl font-display font-semibold text-muted-900 mb-4">
                {initiative.title}
              </h3>
              <p className="text-muted-700 leading-relaxed">{initiative.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Approach Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-display font-semibold text-muted-900 mb-8 text-center">
            Our Approach
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative"
              >
                {index < practices.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent"></div>
                )}
                <div className="text-4xl font-display font-bold text-primary-400 mb-3">
                  {practice.step}
                </div>
                <h4 className="text-xl font-display font-semibold text-muted-900 mb-2">
                  {practice.title}
                </h4>
                <p className="text-muted-600 leading-relaxed text-sm">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-3xl font-display font-bold mb-4">
              Together, We Make a Difference
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Every sustainable choice, every upcycled garment, and every conversation about ethical fashion contributes
              to a more sustainable future. Join us in making fashion a force for good.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sustainability

