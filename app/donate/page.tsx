import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Heart, Users, BookOpen, ShoppingBag, Megaphone } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Partner with CCNatters to Build Healing, Creativity, Voice & Belonging
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none mb-12">
              <p className="text-lg">
                Your financial support makes it possible for us to continue creating spaces where authentic dialogue
                about faith, identity, and grace can flourish. As an independent platform, we rely on the generosity of
                our community to sustain and grow this work.
              </p>

              <h2 className="text-2xl font-bold text-teal mt-12 mb-6">Why Give?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <Heart className="h-4 w-4 text-teal" />
                  </div>
                  <div>
                    <span className="font-medium">Fund Healing Programmes:</span> Support Bible & Breakfast, Creative
                    Spaces, and Healing Circles - free, inclusive spaces where people can explore faith and healing
                    safely.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <Megaphone className="h-4 w-4 text-coral" />
                  </div>
                  <div>
                    <span className="font-medium">Platform Untold Voices:</span> Help us produce podcasts, stories, and
                    events that centre voices often silenced by church culture.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-yellow" />
                  </div>
                  <div>
                    <span className="font-medium">Build Creative & Culturally Rooted Resources:</span> Your giving helps
                    us design materials that meet people where they are - practical, poetic, and powerfully relatable.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-mint/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <Users className="h-4 w-4 text-mint" />
                  </div>
                  <div>
                    <span className="font-medium">Train and Release Leaders:</span> Invest in emerging creatives,
                    speakers, and hosts who are leading spiritual conversations in their own communities.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center mt-1 flex-shrink-0">
                    <ShoppingBag className="h-4 w-4 text-cyan" />
                  </div>
                  <div>
                    <span className="font-medium">Grow the Movement:</span> From studio cafés to live events, your
                    support fuels bold, culturally conscious expansion.
                  </div>
                </li>
              </ul>
            </div>

            {/* Donation Form */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="text-2xl">Ways to Give</CardTitle>
                <CardDescription>Choose how you'd like to support CCNatters</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Donation Type</h3>
                    <RadioGroup defaultValue="one-time" className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-Time Gift</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly Partnership</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sponsor" id="sponsor" />
                        <Label htmlFor="sponsor">Sponsor a Program</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Donation Amount</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <Button variant="outline" type="button" className="h-12">
                        £10
                      </Button>
                      <Button variant="outline" type="button" className="h-12">
                        £25
                      </Button>
                      <Button variant="outline" type="button" className="h-12">
                        £50
                      </Button>
                      <Button variant="outline" type="button" className="h-12">
                        £100
                      </Button>
                      <Button variant="outline" type="button" className="h-12">
                        £250
                      </Button>
                      <div className="relative">
                        <Input placeholder="Other amount" className="h-12 pl-6" />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2">£</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="First name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-teal hover:bg-teal/90 h-12 text-lg">
                    Donate Now
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Your Impact */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-teal mb-6">Your Impact</h2>
              <p className="text-lg">
                Your donations directly support podcast production, community building, event hosting, and the
                development of new resources to extend our conversations beyond the podcast.
              </p>
            </div>

            {/* Thank You */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-teal mb-4">Thank You</h2>
              <p className="text-lg">
                Thank you for partnering with us in creating spaces where grace, truth, and authentic community can
                thrive.
              </p>
              <p className="text-sm text-gray-500 mt-2">All donations are tax-deductible where applicable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-12">Other Ways to Support</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Share your time and talents with our community. We need help with events, media, and more.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/get-involved#volunteer">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Spread the Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Share our podcast, events, and resources with your network. Help us reach those who need to hear
                    these conversations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/share">Share Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Partner With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Organizations, churches, and businesses can partner with us for events, programs, and initiatives.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/get-involved#community">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join us in creating spaces of healing and transformation</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every contribution, no matter the size, helps us continue our mission of creating safe, creative, and
            grounded spaces for those healing from religious trauma and exploring faith beyond fear.
          </p>
          <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy text-lg px-8 py-6 h-auto">
            <Link href="#top">Donate Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
