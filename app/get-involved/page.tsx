import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Users, HandHeart } from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold ">Get Involved</h1>
        </div>
      </section>

      {/* Attend an Event */}
      <section id="events" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-yellow/10 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-yellow" />
                </div>
                <h2 className="text-3xl font-bold text-teal">Attend an Event</h2>
                <p className="text-xl font-medium">Faith. Food. Creativity. Conversation.</p>
                <p className="text-gray-600">Join us in-person or online.</p>

                <ul className="space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span>Bible & Breakfast – A warm meal, open conversation, no pressure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>Creative Spaces – Workshops, performances, and content creation meetups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>Live Podcast Events – Recording nights, panels, and community Q&As</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>Healing Circles – Peer support gatherings and trauma-informed group spaces</span>
                  </li>
                </ul>

                <div className="flex items-center gap-3 mt-6">
                  <span className="text-teal text-2xl">🔸</span>
                  <Button asChild className="bg-teal hover:bg-teal/90">
                    <Link href="/events">View our upcoming events</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/attend-an-event.png" alt="CCNatters Event" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer With Us */}
      <section id="volunteer" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/creative-collective.jpeg"
                  alt="CCNatters Volunteers"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-coral" />
                </div>
                <h2 className="text-3xl font-bold text-coral">Volunteer With Us</h2>
                <p className="text-gray-600">
                  You don't need a theology degree or perfect faith. Just bring your authentic self, your heart for
                  people, and a willingness to show up as you are.
                </p>

                <p className="text-lg font-medium mt-6">We welcome:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Hosts for meetups and Bible & Breakfast tables</li>
                  <li>Media & creative support (filming, editing, graphics)</li>
                  <li>Mentors for young creatives</li>
                  <li>Facilitators for healing circles</li>
                  <li>Counsellors</li>
                  <li>Therapists</li>
                  <li>Collaboration with other charities</li>
                  <li>Logistics and event support</li>
                </ul>

                <Button asChild className="mt-6 bg-coral hover:bg-coral/90">
                  <Link href="/join-team">Join our team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support the Mission */}
      <section id="support" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-mint/10 flex items-center justify-center">
                  <HandHeart className="h-8 w-8 text-mint" />
                </div>
                <h2 className="text-3xl font-bold text-mint">Support the Mission</h2>
                <p className="text-gray-600">Everything we do is made possible through community support.</p>

                <p className="text-lg font-medium mt-6">Your giving helps us:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Offer therapy access for those impacted by faith-based harm</li>
                  <li>Run healing groups and Creative Collective workshops</li>
                  <li>Provide food and practical care through dignity-first outreach</li>
                  <li>Keep podcast production honest, and community-driven</li>
                </ul>

                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-3">
                    <span className="text-mint text-2xl">🔸</span>
                    <Button asChild className="bg-mint hover:bg-mint/90 text-navy">
                      <Link href="/donate">Make a one-time or monthly donation</Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint text-2xl">🔸</span>
                    <Button asChild variant="outline" className="border-mint text-mint hover:bg-mint/5">
                      <Link href="/sponsor">Sponsor a programme</Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint text-2xl">🔸</span>
                    <Button asChild variant="outline" className="border-mint text-mint hover:bg-mint/5">
                      <Link href="/in-kind">Give in kind (space, food, equipment, time)</Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint text-2xl">🔸</span>
                    <Button asChild variant="outline" className="border-mint text-mint hover:bg-mint/5">
                      <Link href="/share">Share our story</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/support-our-mission.jpeg" alt="Support CCNatters" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bring CCNatters to Your Community */}
      <section id="community" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-8">Bring CCNatters to Your Community</h2>
            <p className="text-lg mb-8">Want to host a programme in your city or collaborate on something new?</p>

            <p className="text-lg font-medium mb-6">We work with:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div className="bg-white p-4 rounded-lg shadow-sm">Local communities</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Charities</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Creatives</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Mental health professionals</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Ministries</div>
              <div className="bg-white p-4 rounded-lg shadow-sm">Schools & universities</div>
            </div>

            <Button asChild className="bg-teal hover:bg-teal/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-teal text-center mb-6">Contact Us</h2>
            <p className="text-center text-gray-600 mb-12">
              Got questions, stories, partnership propositions or ideas, we'd love to hear from you.
              <br />
              <span className="italic">"Every voice matters in building a community of grace and transformation."</span>
            </p>

            <div className="text-center mb-8">
              <p className="flex items-center justify-center gap-2 text-lg">
                <span>📮</span> Email: hello@ccnatters.com
              </p>
              <p className="mt-2 text-lg">
                <span>📨</span> Or use the contact form below
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={6} />
              </div>

              <Button type="submit" className="w-full bg-teal hover:bg-teal/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
