import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen, ShoppingBag, Megaphone } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            CCNatters isn't just a podcast - it's a holistic ecosystem designed to foster healing, creativity, and
            community. Each program addresses different aspects of the journey from silence to voice, from isolation to
            belonging, from trauma to freedom.
          </p>
        </div>
      </section>

      {/* Healing Spaces */}
      <section id="healing-spaces" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-teal" />
                </div>
                <h2 className="text-3xl font-bold text-teal">Healing Spaces</h2>
                <p className="text-xl font-medium">Faith shouldn't stop you from getting help. You deserve both.</p>
                <p className="text-gray-600">
                  We create trauma-informed spaces where your experience with religious harm is understood, validated,
                  and supported. No judgment. No pressure. Just compassionate community and professional guidance when
                  you need it. Through peer-led groups, counseling referrals, and specialized resources, we make mental
                  health and spiritual healing accessible to all.
                </p>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-medium">What we offer:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Trauma-informed support groups</li>
                    <li>Culturally-sensitive counseling referrals</li>
                    <li>Safe spaces for processing spiritual injury</li>
                    <li>Resources for those navigating faith transitions</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Who it's for:</h3>
                  <p className="text-gray-600">
                    Anyone recovering from religious trauma, faith-related burnout, identity suppression, or
                    church-related harm.
                  </p>
                </div>

                <Button asChild className="mt-4 bg-teal hover:bg-teal/90">
                  <Link href="/get-involved#healing-spaces">Join a Support Group</Link>
                </Button>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/healing-spaces.webp" alt="Healing Spaces" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Collective */}
      <section id="creative-collective" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                <Image src="/images/creative-collective.jpeg" alt="Creative Collective" fill className="object-cover" />
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-coral" />
                </div>
                <h2 className="text-3xl font-bold text-coral">Creative Collective</h2>
                <p className="text-xl font-medium">Your story deserves to be seen and heard.</p>
                <p className="text-gray-600">
                  This dynamic community empowers underrepresented young creatives to explore identity, faith, and
                  artistry through media, performance, and collaboration. We don't just showcase art - we nurture the
                  artists creating it.
                </p>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-medium">What we offer:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Workshops and skill development</li>
                    <li>Mentoring from established creatives</li>
                    <li>Collaborative projects and showcases</li>
                    <li>Platforms for artistic expression</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Who it's for:</h3>
                  <p className="text-gray-600">
                    Young creatives (especially Black, Asian, and underrepresented voices) looking to explore faith,
                    identity, and social impact through their art.
                  </p>
                </div>

                <Button asChild className="mt-4 bg-coral hover:bg-coral/90">
                  <Link href="/get-involved#creative-collective">Join the Collective</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible & Breakfast */}
      <section id="bible-breakfast" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-yellow/10 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-yellow" />
                </div>
                <h2 className="text-3xl font-bold text-yellow">Bible & Breakfast</h2>
                <p className="text-xl font-medium">Hot meals. Honest conversations. No pressure.</p>
                <p className="text-gray-600">
                  We're reimagining what engaging with scripture can look like when paired with good food and authentic
                  community. These monthly gatherings combine nourishment for body and soul in spaces free from judgment
                  or performance.
                </p>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-medium">What we offer:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Monthly meetups with complimentary meals</li>
                    <li>Open discussions on faith and life</li>
                    <li>Safe space for questions and exploration</li>
                    <li>Community beyond Sunday services</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Who it's for:</h3>
                  <p className="text-gray-600">
                    Anyone curious about faith, processing belief-based questions, or seeking community without
                    judgment.
                  </p>
                </div>

                <Button asChild className="mt-4 bg-yellow hover:bg-yellow/90 text-navy">
                  <Link href="/get-involved#bible-breakfast">Find the Next Meetup</Link>
                </Button>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/bible-breakfast.jpeg" alt="Bible & Breakfast" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dignity-First Outreach */}
      <section id="dignity-first" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/dignity-first-outreach.jpeg"
                  alt="Dignity-First Outreach"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-emerald-600">Dignity-First Outreach</h2>
                <p className="text-xl font-medium">We meet practical needs with relational dignity.</p>
                <p className="text-gray-600">
                  Life can be challenging. Our outreach program provides food parcels, hygiene kits, and resource
                  connections always paired with care, conversation, and genuine community. We believe support should
                  preserve dignity, not diminish it.
                </p>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-medium">What we offer:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Food parcels and emergency supplies</li>
                    <li>Hygiene kits and essential items</li>
                    <li>Connection to additional resources</li>
                    <li>Community support and relationship</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Who it's for:</h3>
                  <p className="text-gray-600">
                    Individuals and families facing food insecurity or in need of practical support.
                  </p>
                </div>

                <Button asChild className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/get-involved#dignity-first">Get Support or Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice & Advocacy */}
      <section id="voice-advocacy" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Megaphone className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-600">Voice & Advocacy</h2>
                <p className="text-xl font-medium">From silence to impact.</p>
                <p className="text-gray-600">
                  We amplify unheard stories through podcasting, campaigns, and storytelling projects - helping people
                  not only be heard but equipped to spark culture-shifting conversations in their world.
                </p>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-medium">What we offer:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Platform for sharing personal narratives</li>
                    <li>Media training and storytelling skills</li>
                    <li>Campaigns addressing faith-based injustice</li>
                    <li>Advocacy for marginalized voices in faith spaces</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Who it's for:</h3>
                  <p className="text-gray-600">
                    Those with stories to tell, particularly from marginalized communities or those affected by
                    religious harm.
                  </p>
                </div>

                <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/get-involved#voice-advocacy">Share Your Story</Link>
                </Button>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/voice-advocacy.jpeg" alt="Voice & Advocacy" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Programs Work Together */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-8">How Our Programs Work Together</h2>
            <p className="text-lg mb-6">
              At CCNatters, our programs aren't isolated initiatives - they're interconnected parts of a larger
              ecosystem:
            </p>

            <ul className="text-left list-disc pl-6 space-y-4 max-w-2xl mx-auto mb-12">
              <li className="text-gray-600">
                Stories from Healing & Wholeness sometimes become episodes on our podcast
              </li>
              <li className="text-gray-600">Artists from the Creative Collective contribute to our media and events</li>
              <li className="text-gray-600">Bible & Breakfast gatherings build community that supports our outreach</li>
              <li className="text-gray-600">Recipients of Food & Care find pathways to other programs</li>
              <li className="text-gray-600">Voice & Advocacy amplifies the impact of all our work</li>
            </ul>

            <p className="text-lg mb-8">
              Together, these programs create a comprehensive approach to community, healing, and transformation all
              rooted in our core values of belonging, authenticity, truth, love, and freedom.
            </p>

            <Button asChild className="bg-teal hover:bg-teal/90">
              <Link href="/get-involved">Explore All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bring CCNatters to Your Community */}
      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bring CCNatters to Your Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Interested in hosting a Creative Space? Launching a Healing and Wholeness Space? or Running a Bible &
            Breakfast in your area?
            <br />
            <br />
            We're building with partners who share our vision. Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">Email: hello@ccnatters.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy">
                <Link href="/get-involved">Get involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
