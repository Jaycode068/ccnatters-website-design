import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="CCNatters Logo" width={50} height={50} className="h-12 w-12" />
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              CCNatters is a community creating safe, creative, and grounded spaces for those healing from religious
              trauma and abuse, exploring identity, and growing into true freedom.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-cyan">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-cyan">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-cyan">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://youtube.com" className="text-gray-300 hover:text-cyan">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan">Explore CCNatters</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/who-we-are" className="text-gray-300 hover:text-cyan">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-cyan">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-gray-300 hover:text-cyan">
                  CCNatters Podcast
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-cyan">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-cyan">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-cyan">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/get-involved#volunteer" className="text-gray-300 hover:text-cyan">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/get-involved#partner" className="text-gray-300 hover:text-cyan">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cyan">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">Join our newsletter for updates, events, and resources.</p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-navy border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-cyan hover:bg-cyan/90 text-navy font-medium">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} CCNatters. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-cyan">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-cyan">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
