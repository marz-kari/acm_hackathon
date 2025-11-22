import { motion } from 'framer-motion'

function Footer() {
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Facebook', url: '#', icon: '👥' },
    { name: 'Twitter', url: '#', icon: '🐦' },
  ]

  return (
    <footer className="bg-gradient-soft border-t border-muted-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-600 mb-4">
              Fashion Forward
            </h3>
            <p className="text-muted-600 text-sm leading-relaxed">
              Cultivating Creative Community at USD through Fashion, Sustainability, and Self-Expression.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-muted-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-600 hover:text-primary-600 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-600 hover:text-primary-600 transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-muted-600 hover:text-primary-600 transition-colors text-sm">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-600 hover:text-primary-600 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-muted-800 mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted-200 text-center text-sm text-muted-500">
          <p>&copy; {new Date().getFullYear()} Fashion Forward. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

