import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, BookOpen, Users, Megaphone, ArrowRight, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-teal text-white py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Rediscover your voice. Walk in freedom.
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              CCNatters is a community creating safe, creative, and grounded spaces for those healing from religious
              trauma and abuse, exploring identity, and growing into true freedom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy font-medium">
                <Link href="/podcast">Listen to Our Podcast</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20">
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
            </div>
            <p className="text-cyan font-medium pt-4">Faith. Freedom. Family. Future.</p>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/images/founders.jpeg"
              alt="CCNatters Founders"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-yellow py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Real voices, radical grace:</h2>
          <p className="text-navy/80 max-w-3xl mx-auto italic">
            "If anyone belongs to Christ, they are a new person, old things are gone, and a new life has begun. All of
            this is God's work. He brought us back to Himself through Christ and gave us the task of helping others find
            their way to Him. God in Christ, restored the world to Himself, and He has trusted us to share this message
            with everyone." - 2 Corinthians 5:17-19
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal">Who we are and why we exist</h2>
            <p className="text-lg">
              Faith journeys aren't always straight paths. In the UK alone, nearly 60% of people raised in Christian
              homes have stepped away from traditional faith communities.
            </p>
            <p className="text-lg">
              At CCNatters, we're reclaiming faith by creating a community where unlearning is sacred, identity is
              rediscovered, and grace leads the way.
            </p>
            <Button asChild className="mt-4 bg-teal hover:bg-teal/90">
              <Link href="/who-we-are">Learn more</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-teal text-center mb-12">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-teal" />
                </div>
                <CardTitle className="text-xl text-teal">Healing Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Safe, trauma-informed gatherings where faith and mental health meet providing support for those
                  recovering from religious harm and exploring faith beyond fear.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-teal border-teal hover:bg-teal/5">
                  <Link href="/programs#healing-spaces">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-xl text-coral">Creative Collective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Where your art meets your truth. A vibrant community empowering underrepresented young creatives to
                  explore faith, identity, and purpose through media, performance, and collaborative expression.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-coral border-coral hover:bg-coral/5">
                  <Link href="/programs#creative-collective">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-yellow" />
                </div>
                <CardTitle className="text-xl text-yellow">Bible & Breakfast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monthly gatherings combining warm meals with open conversations about scripture, faith, and life
                  without judgment or performance.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-yellow border-yellow hover:bg-yellow/5">
                  <Link href="/programs#bible-breakfast">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 4 */}
            <Card className="lg:col-start-2">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-mint/10 flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-mint" />
                </div>
                <CardTitle className="text-xl text-mint">Dignity-First Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Essential supplies and support delivered with dignity, conversation, and genuine community connection.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-mint border-mint hover:bg-mint/5">
                  <Link href="/programs#dignity-first">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 5 */}
            <Card>
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mb-2">
                  <Megaphone className="h-6 w-6 text-cyan" />
                </div>
                <CardTitle className="text-xl text-cyan">Voice & Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Amplifying unheard voices and perspectives through podcasting, campaigns, and storytelling projects
                  that spark culture-shifting conversations.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-cyan border-cyan hover:bg-cyan/5">
                  <Link href="/programs#voice-advocacy">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">The CCNatters Podcast</h2>
              <p className="text-xl">Real conversations beyond religion.</p>
              <p className="opacity-90">
                We rethink faith, confront man-made systems, and ask the questions religion taught us to avoid.
              </p>
              <div className="pt-4">
                <h3 className="font-medium mb-2">Featured clip:</h3>
                <p className="text-cyan mb-4">Is the Bible Redundant? The Answer Isn't What You Expect</p>
                <div className="aspect-video bg-navy/30 rounded-lg overflow-hidden relative">
                  <Link
                    href="https://youtu.be/XlyDdUUEAwk?si=9fXJfkfhileZeu22"
                    target="_blank"
                    className="block relative w-full h-full"
                  >
                    <Image
                      src="https://img.youtube.com/vi/XlyDdUUEAwk/maxresdefault.jpg"
                      alt="Is the Bible Redundant? The Answer Isn't What You Expect"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-yellow flex items-center justify-center">
                        <Play className="h-6 w-6 text-navy ml-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <p className="font-medium">New episodes every Friday.</p>
              <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy">
                <Link href="/podcast">Listen Now</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/images/podcast-banner.png"
                alt="CCNatters Podcast"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal mb-6">
            Join the conversation. Find your community. Support the mission.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="bg-coral hover:bg-coral/90">
              <Link href="/get-involved#events">Attend an Event</Link>
            </Button>
            <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy">
              <Link href="/donate">Support Our Work</Link>
            </Button>
            <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/5">
              <Link href="/contact">Connect with us</Link>
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium mb-4">Subscribe to our newsletter for updates, events, and resources</h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button className="bg-teal hover:bg-teal/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal text-center mb-12">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Bible & Breakfast</CardTitle>
                <CardDescription>June 15, 2025 • 10:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Join us for warm food and open conversations about scripture and life.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/events/bible-breakfast">Register</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Event 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Creative Collective Workshop</CardTitle>
                <CardDescription>June 22, 2025 • 6:30 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Express your faith journey through art in our monthly creative workshop.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/events/creative-workshop">Register</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Event 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Live Podcast Recording</CardTitle>
                <CardDescription>June 30, 2025 • 7:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Be part of our live audience as we record a special podcast episode.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/events/live-podcast">Register</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="link" className="text-teal">
              <Link href="/events" className="flex items-center">
                View all events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-4">
              Share your story, tell us what's helped or just say, "hey!"
            </h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Your feedback helps us grow and better serve our community.
            </p>

            <form className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="What's this about?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Share your thoughts with us..."
                ></textarea>
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
