'use client'

import { Container } from '@components/shared'

const links = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Documentation', 'Guides', 'API Reference', 'Community'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-900 py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-xl mb-4">FlowSync</h3>
            <p className="text-gray-500 text-sm">
              Workflow automation for modern teams
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[--site-accent] text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 FlowSync. All rights reserved.
          </p>

          <div className="flex gap-6">
            {[
              { name: 'Twitter', url: 'https://twitter.com' },
              { name: 'GitHub', url: 'https://github.com' },
              { name: 'LinkedIn', url: 'https://linkedin.com' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[--site-accent] text-sm transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
