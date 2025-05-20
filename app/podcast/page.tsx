import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Music, Headphones, MessageSquare, Play } from "lucide-react"

export default function PodcastPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">CCNatters Podcast</h1>
        </div>
      </section>

      {/* Opening */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-teal">CCNatters Podcast: Real Conversations Beyond Religion</h2>
              <p className="text-lg text-gray-600">
                Join Mo and Illy as they discuss identity, faith, grace, sonship, healing, and what it means to live
                free. Each episode brings diverse perspectives to the table, creating space for authentic dialogue that
                challenges, inspires, and transforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-coral hover:bg-coral/90">
                  <Link href="#listen">Listen Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/5">
                  <Link href="#episodes">Latest Episodes</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/images/podcast-hosts.jpg"
                alt="Mo and Illy - CCNatters Podcast Hosts"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-teal text-center mb-12">What to expect</h2>

            <div className="grid sm:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-teal">Real Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We don't shy away from hard questions. Expect raw, grace-filled dialogue about faith, identity, and
                    the tension between tradition and truth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-coral">Freedom Over Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    No filters. No spiritual checklists. Just space to rethink, unlearn, and grow in the love and
                    freedom Jesus actually invites us into.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-yellow">Scripture with Spirit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We open the Bible but it's not your typical Sunday school. You'll hear new perspectives that centre
                    grace, not guilt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-mint">Kingdom Over Religion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We challenge religious norms to rediscover what it means to live as sons, not servants and how the
                    Kingdom is here, not just coming.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-cyan">Transforming Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Take away ideas that can impact your daily interactions.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-teal">Community Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Be part of a growing community committed to better understanding of grace and true liberty.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Listen */}
      <section id="listen" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-12">How to listen</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Link
                href="https://youtube.com/@ccnatters?si=GEnACFtQ7qF5W4CC"
                target="_blank"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
                <span className="font-medium">YouTube</span>
              </Link>

              <Link
                href="https://podcasts.apple.com/ng/podcast/ccnatters-real-conversations-beyond-religion/id1801933003"
                target="_blank"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <span className="font-medium">Apple Podcast</span>
              </Link>

              <Link
                href="https://tr.ee/3XN7B94WN3"
                target="_blank"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <span className="font-medium">Spotify</span>
              </Link>

              <Link
                href="https://music.amazon.com/es-co/podcasts/5de91863-44bd-4d64-beb9-7bf7e61b2b0d/ccnatters-real-conversations-beyond-religion"
                target="_blank"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <span className="font-medium">Amazon Music</span>
              </Link>
            </div>

            <p className="mt-12 text-lg font-medium">New episodes every Friday</p>
          </div>
        </div>
      </section>

      {/* Listener Stories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-12">
              <MessageSquare className="inline-block mr-2 h-8 w-8" /> Listener Stories
            </h2>

            <div className="grid gap-8">
              <Card>
                <CardContent className="pt-6">
                  <blockquote className="italic text-lg text-gray-600">
                    "CCNatters has been a lifeline for me. After years of feeling like I didn't belong in traditional
                    church spaces, I've found a community that speaks my language and asks the questions I've been
                    afraid to voice."
                  </blockquote>
                  <p className="mt-4 font-medium">Sarah, London</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <blockquote className="italic text-lg text-gray-600">
                    "I never thought I'd engage with faith content again after my experience with religious trauma, but
                    Mo and Illy create such a safe, honest space. They're helping me reclaim parts of my spirituality I
                    thought were lost forever."
                  </blockquote>
                  <p className="mt-4 font-medium">James, Manchester</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <blockquote className="italic text-lg text-gray-600">
                    "The conversations on identity and belonging have been transformative for me as a person of color
                    navigating predominantly white faith spaces. Thank you for amplifying voices like mine."
                  </blockquote>
                  <p className="mt-4 font-medium">Priya, Birmingham</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section id="episodes" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-teal text-center mb-12">Catch up on our latest episodes</h2>

            <h3 className="text-2xl font-bold mb-8">Top YouTube Episodes</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="aspect-video relative bg-gray-100">
                  <Link
                    href="https://www.youtube.com/watch?v=VAizrB4nuQ8"
                    target="_blank"
                    className="block relative w-full h-full"
                  >
                    <Image
                      src="https://img.youtube.com/vi/VAizrB4nuQ8/maxresdefault.jpg"
                      alt="You're Stuck in a Religious Cycle - Here's Why You Can't Break Free!"
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
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-2">
                    You're Stuck in a Religious Cycle - Here's Why You Can't Break Free!
                  </h4>
                  <Link
                    href="https://www.youtube.com/watch?v=VAizrB4nuQ8"
                    target="_blank"
                    className="text-teal hover:underline text-sm"
                  >
                    Watch on YouTube
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video relative bg-gray-100">
                  <Link
                    href="https://youtu.be/k6dT5odJaUY?si=OxvIruGzaYYU8szw"
                    target="_blank"
                    className="block relative w-full h-full"
                  >
                    <Image
                      src="https://img.youtube.com/vi/k6dT5odJaUY/maxresdefault.jpg"
                      alt="The Parable of the Sower: Unveiling God's Kingdom Plan"
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
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-2">The Parable of the Sower: Unveiling God's Kingdom Plan</h4>
                  <Link
                    href="https://youtu.be/k6dT5odJaUY?si=OxvIruGzaYYU8szw"
                    target="_blank"
                    className="text-teal hover:underline text-sm"
                  >
                    Watch on YouTube
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video relative bg-gray-100">
                  <Link
                    href="https://youtu.be/R45Gx9ddG3Y?si=kn69kxf0CVmf9qE_"
                    target="_blank"
                    className="block relative w-full h-full"
                  >
                    <Image
                      src="https://img.youtube.com/vi/R45Gx9ddG3Y/maxresdefault.jpg"
                      alt="Did Jesus Want a Religion? | The Truth About His Message"
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
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-2">Did Jesus Want a Religion? | The Truth About His Message</h4>
                  <Link
                    href="https://youtu.be/R45Gx9ddG3Y?si=kn69kxf0CVmf9qE_"
                    target="_blank"
                    className="text-teal hover:underline text-sm"
                  >
                    Watch on YouTube
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Be Part of the Conversation */}
      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Be part of the conversation.</h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy">
              <Link href="/get-involved#sponsor">Sponsor an episode</Link>
            </Button>
            <Button asChild className="bg-coral hover:bg-coral/90">
              <Link href="/get-involved#appear">Make an appearance</Link>
            </Button>
            <Button asChild className="bg-cyan hover:bg-cyan/90 text-navy">
              <Link href="#listen">Subscribe and Share</Link>
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-medium mb-4">Stay Connected</h3>
            <p className="mb-6">Join our mailing list for episode updates, behind-the-scenes, live events, and more.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md flex-1 text-gray-800"
              />
              <Button className="bg-yellow hover:bg-yellow/90 text-navy">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
