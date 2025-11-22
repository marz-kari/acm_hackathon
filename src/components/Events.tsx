import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  image: string
  type: 'upcoming' | 'past'
}

function Events() {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const events: Event[] = [
    {
      id: 1,
      title: 'Spring Fashion Show 2024',
      date: 'April 15, 2024',
      location: 'USD Campus',
      description: 'Join us for our annual spring fashion show featuring sustainable designs from student creators.',
      image: '👗',
      type: 'upcoming',
    },
    {
      id: 2,
      title: 'Sustainable Fashion Workshop',
      date: 'March 20, 2024',
      location: 'Student Center',
      description: 'Learn about upcycling, sustainable materials, and eco-friendly fashion practices.',
      image: '♻️',
      type: 'upcoming',
    },
    {
      id: 3,
      title: 'Community Thrift Swap',
      date: 'March 5, 2024',
      location: 'Outdoor Plaza',
      description: 'Swap your gently used clothing and accessories with fellow community members.',
      image: '🔄',
      type: 'upcoming',
    },
    {
      id: 4,
      title: 'Fall Fashion Show 2023',
      date: 'November 10, 2023',
      location: 'USD Campus',
      description: 'A celebration of autumn fashion with a focus on sustainable and ethical brands.',
      image: '🍂',
      type: 'past',
    },
    {
      id: 5,
      title: 'Design Thinking Workshop',
      date: 'October 18, 2023',
      location: 'Innovation Lab',
      description: 'Explore creative design processes and sustainable fashion innovation.',
      image: '💡',
      type: 'past',
    },
    {
      id: 6,
      title: 'Fashion & Sustainability Panel',
      date: 'September 22, 2023',
      location: 'Auditorium',
      description: 'Industry experts discuss the future of sustainable fashion and ethical practices.',
      image: '🌍',
      type: 'past',
    },
  ]

  const filteredEvents = events.filter((event) => event.type === filter)

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-muted-900 mb-6">
            Events
          </h2>
          <p className="text-xl text-muted-600 max-w-2xl mx-auto text-balance">
            Join us for fashion shows, workshops, and community gatherings that celebrate creativity and sustainability.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-muted-100 rounded-lg p-1">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'upcoming'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-muted-600 hover:text-muted-900'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'past'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-muted-600 hover:text-muted-900'
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-warm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                {event.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past Event'}
                  </span>
                  <span className="text-sm text-muted-500">{event.date}</span>
                </div>
                <h3 className="text-2xl font-display font-semibold text-muted-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-500 mb-3 flex items-center">
                  📍 {event.location}
                </p>
                <p className="text-muted-600 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-500 text-lg">No {filter} events at this time.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Events

