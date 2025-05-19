import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Headphones, ArrowRight } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <div className="flex items-center justify-center gap-2 text-2xl">
            <BookOpen className="h-6 w-6" />
            <span>Explore. Reflect. Rebuild.</span>
          </div>
          <p className="text-xl max-w-3xl mx-auto mt-4">
            This is a growing library of resources. Feel free to be a part of it by suggesting resources or donating
            one.
          </p>
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal text-center mb-12">Ebooks</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-48 bg-yellow/20 flex items-center justify-center">
                <FileText className="h-16 w-16 text-yellow" />
              </div>
              <CardHeader>
                <CardTitle>Healing from Religious Trauma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A practical guide for those navigating the complex journey of healing from harmful religious
                  experiences.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/resources/healing-from-religious-trauma">Download PDF</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-coral/20 flex items-center justify-center">
                <FileText className="h-16 w-16 text-coral" />
              </div>
              <CardHeader>
                <CardTitle>Finding Your Voice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exercises and reflections to help you rediscover your authentic voice after experiences of silencing.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/resources/finding-your-voice">Download PDF</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-cyan/20 flex items-center justify-center">
                <FileText className="h-16 w-16 text-cyan" />
              </div>
              <CardHeader>
                <CardTitle>Grace Beyond Religion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Exploring what it means to experience grace outside of traditional religious frameworks.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/resources/grace-beyond-religion">Download PDF</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Curated Podcast Playlists */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal text-center mb-12">Curated Podcast Playlists</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-yellow" />
                  <span>For Those Healing from Religious Trauma</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>Breaking Free from Religious Cycles</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/religious-cycles">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Healing is Holy: Reclaiming Your Story</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/healing-is-holy">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Finding Community After Church Hurt</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/after-church-hurt">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-coral" />
                  <span>Exploring Identity & Faith</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>Identity Beyond Labels</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/identity-beyond-labels">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Cultural Identity & Faith Journey</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/cultural-identity">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Authenticity in Spiritual Spaces</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/authenticity">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-mint" />
                  <span>Scripture Reimagined</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>The Bible: Beyond Literalism</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/beyond-literalism">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Jesus vs. Religion</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/jesus-vs-religion">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Grace-Centered Reading of Scripture</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/grace-centered">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-cyan" />
                  <span>Creative Expression & Faith</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>Art as Spiritual Practice</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/art-spiritual-practice">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Finding Your Creative Voice</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/creative-voice">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Storytelling as Healing</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/podcast/storytelling-healing">
                        Listen <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Suggest a Resource */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-6">Suggest a Resource</h2>
            <p className="text-gray-600 mb-8">
              Have a book, podcast, article, or other resource that's been helpful in your journey? Share it with our
              community.
            </p>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-left">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="resource-title" className="text-sm font-medium">
                      Resource Title
                    </label>
                    <input
                      id="resource-title"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Title of the resource"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="resource-type" className="text-sm font-medium">
                      Resource Type
                    </label>
                    <select
                      id="resource-type"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a type</option>
                      <option value="book">Book</option>
                      <option value="podcast">Podcast</option>
                      <option value="article">Article</option>
                      <option value="video">Video</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="resource-link" className="text-sm font-medium">
                      Link (if available)
                    </label>
                    <input
                      id="resource-link"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="https://"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="resource-description" className="text-sm font-medium">
                      Why is this resource helpful?
                    </label>
                    <textarea
                      id="resource-description"
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tell us why you recommend this resource"
                    ></textarea>
                  </div>

                  <Button type="submit" className="bg-teal hover:bg-teal/90">
                    Submit Resource
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Truth doesn't end the conversation. It opens one.</h2>
          <p className="text-xl mb-8">Keep exploring, questioning, and building with grace.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy">
              <Link href="/podcast">
                <span className="text-yellow text-2xl mr-2">🔸</span> Back to Podcast
              </Link>
            </Button>
            <Button asChild className="bg-coral hover:bg-coral/90">
              <Link href="/programs">
                <span className="text-coral text-2xl mr-2">🔸</span> Join a Programme
              </Link>
            </Button>
            <Button asChild className="bg-cyan hover:bg-cyan/90 text-navy">
              <Link href="/contact">
                <span className="text-cyan text-2xl mr-2">🔸</span> Contact us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
