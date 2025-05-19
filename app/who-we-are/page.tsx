import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function WhoWeArePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Who We Are</h1>s
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-teal leading-relaxed">
              CCNatters is a community-first movement reimagining what faith, freedom, family, and healing look like
              today. We create safe, creative, and grounded spaces where people can heal from religious harm, reconnect
              with their God-given identity, and grow into freedom together.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-8">Our Story</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Like many who find their way to CCNatters, we know what it's like to feel silenced.
                </p>
                <p className="text-lg mb-6">
                  Illy and Mo's friendship began years before CCNatters existed, through countless late-night
                  conversations about faith, identity, and the dissonance they felt between what they were taught and
                  what they experienced. As two individuals navigating their own complex journeys with faith, they found
                  themselves asking questions that seemed unwelcome in traditional religious spaces. Why does belonging
                  require behaving a certain way?
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-coral hover:bg-coral/90">Read more</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">From Silence to Voice</DialogTitle>
                      <DialogDescription>The full story of how CCNatters began</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-6">
                      <h3 className="text-xl font-bold text-teal">The Conversations That Started It All</h3>
                      <p>Like many who find their way to CCNatters, we know what it's like to feel silenced.</p>
                      <p>
                        Illy and Mo's friendship began years before CCNatters existed, through countless late-night
                        conversations about faith, identity, and the dissonance they felt between what they were taught
                        and what they experienced. As two individuals navigating their own complex journeys with faith,
                        they found themselves asking questions that seemed unwelcome in traditional religious spaces:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Why does belonging require behaving a certain way?</li>
                        <li>Where is there room for doubt, questioning, and honest struggle?</li>
                        <li>How can we reconcile the freedom Jesus promised with the constraints we've experienced?</li>
                      </ul>
                      <p>
                        These weren't just philosophical questions—they were deeply personal ones, born from experiences
                        of feeling unseen, unheard, and often alone in their spiritual journey.
                      </p>

                      <h3 className="text-xl font-bold text-teal mt-8">Breaking the Silence</h3>
                      <p>
                        In early 2024, what had been private conversations between friends became something more.
                        Recognizing they weren't alone in their questions, Illy and Mo launched the CCNatters podcast -
                        a space for real conversations beyond religion.
                      </p>
                      <p>
                        The name "CCNatters" emerged from this ethos: conversations that matter, voices that need to be
                        heard, a community where nothing is off-limits and everyone belongs. What they didn't expect was
                        how quickly these conversations would resonate with others.
                      </p>
                      <p>Within months, listener messages poured in:</p>
                      <ul className="list-disc pl-6 space-y-2 italic">
                        <li>"Finally, someone is saying what I've been thinking for years."</li>
                        <li>"I thought I was alone in my questions."</li>
                        <li>"This is the first time I've felt safe exploring faith again."</li>
                      </ul>
                      <p>
                        It became clear: the podcast was just the beginning. There was a profound need for spaces where
                        faith, freedom, healing, and authentic community could coexist.
                      </p>

                      <h3 className="text-xl font-bold text-teal mt-8">From Podcast to Community</h3>
                      <p>
                        What began as conversations evolved into a vision for tangible community impact. We recognized
                        that healing from religious trauma, reclaiming identity, and rediscovering authentic faith
                        happens best in community not just through listening, but through belonging.
                      </p>
                      <p>This realization birthed our five core programs:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Healing & Wholeness:</span> Creating trauma-informed spaces for
                          recovery and restoration
                        </li>
                        <li>
                          <span className="font-medium">Creative Collective:</span> Empowering underrepresented voices
                          to express faith and identity through art
                        </li>
                        <li>
                          <span className="font-medium">Bible & Breakfast:</span> Reimagining scripture engagement
                          through shared meals and honest conversation
                        </li>
                        <li>
                          <span className="font-medium">Food & Care Outreach:</span> Meeting practical needs with
                          dignity and relationship
                        </li>
                        <li>
                          <span className="font-medium">Voice & Advocacy:</span> Amplifying stories and perspectives
                          often silenced or overlooked
                        </li>
                      </ul>
                      <p>
                        Each program emerged organically from the needs we witnessed and the stories we heard. Together,
                        they form an ecosystem of support, creativity, and community where transformation can happen.
                      </p>

                      <h3 className="text-xl font-bold text-teal mt-8">Where We're Going</h3>
                      <p>
                        Today, CCNatters is more than a podcast or even a set of programs. We're a growing movement
                        reimagining what faith, freedom, family, and healing can look like when rooted in grace, truth,
                        and authentic community.
                      </p>
                      <p>
                        Based in the UK with growing communities in Sheffield and online, we're expanding into new
                        cities, creative partnerships, and digital spaces all while remaining anchored to our founding
                        vision: creating safe, creative, and grounded spaces where people can heal from religious harm,
                        reconnect with their God-given identity, and grow into freedom together.
                      </p>
                      <p>
                        This isn't about building another religious institution. It's about fostering spaces where
                        everyone can rediscover their voice, walk in freedom, and find family along the way.
                      </p>
                      <p className="font-bold text-teal mt-4">Faith. Freedom. Family. Future.</p>
                      <p>This is what we're building together. And we'd love for you to join us.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-6">
                <Image
                  src="/images/founders-early.jpeg"
                  alt="Illy and Mo in their early days"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/podcast-hosts.jpeg"
                  alt="CCNatters Podcast Hosts"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-teal text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">
                Fostering a world where every individual lives in the fullness of God's grace, recognizing their
                identity as reflections of His love, and together manifesting a global movement of truth, inclusivity,
                oneness, freedom, and reconciliation.
              </p>
            </div>

            <div className="bg-yellow p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-lg text-navy/80">
                To create safe, creative and spiritually grounded spaces where individuals, especially those affected by
                silence, marginalisation or harmful religious experiences, can heal, grow and thrive. Rooted in values
                of grace and truth, we empower people to reclaim their voice, build community, and live with freedom and
                purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-teal text-center mb-12">Our Core Values</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-teal p-4 text-left text-lg font-bold text-teal">Value</th>
                    <th className="border-b-2 border-teal p-4 text-left text-lg font-bold text-teal">What it Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">Belonging</td>
                    <td className="border-b border-gray-200 p-4">
                      Everyone deserves to feel safe, seen, and welcomed at the table.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">Family</td>
                    <td className="border-b border-gray-200 p-4">
                      This is a shared journey. We heal and grow better together.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">Authenticity</td>
                    <td className="border-b border-gray-200 p-4">
                      We embrace honesty, doubt, and vulnerability, it's how transformation begins.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">Truth, Love, Freedom</td>
                    <td className="border-b border-gray-200 p-4">
                      These are our compass: we speak truth, build in love, and live free in Christ.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal text-center mb-12">
            Meet Mo and Illy - the passionate founders behind CCNatters
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src="/images/mo.jpeg" alt="Mo" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Mo</h3>
                <p className="text-gray-600">
                  Co-founder and podcast host, Mo brings her experience in community building and pastoral care to
                  create spaces where authenticity thrives.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src="/images/illy.jpeg" alt="Illy" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Illy</h3>
                <p className="text-gray-600">
                  Co-founder and creative director, Illy combines her passion for storytelling and faith to amplify
                  voices that need to be heard.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-lg mb-6">
              We believe in the power of conversation to bridge divides and build understanding across race, culture,
              and faith. As a small but dedicated team, we create spaces where authenticity thrives and meaningful
              connections form.
            </p>
            <p className="text-lg mb-8">
              Our work is guided by a commitment to grace, reconciliation, and truth. We're building something special
              here, and we invite you to be part of this journey.
            </p>
            <blockquote className="italic text-xl text-teal mb-8">
              "As friends, we have trust and embrace vulnerability; as family, we grow together."
            </blockquote>
            <Button asChild className="bg-coral hover:bg-coral/90">
              <Link href="/get-involved#volunteer">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Faith Posture */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-teal text-center mb-6">Our Faith Posture</h2>
            <p className="text-lg text-center mb-12">
              We don't exist to police beliefs or hand out doctrine. But we do believe deeply in the liberating truth of
              Jesus and the healing power of His Grace.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th colSpan={2} className="border-b-2 border-teal p-4 text-center text-lg font-bold text-teal">
                      Here's what anchors our work and our voice:
                    </th>
                  </tr>
                  <tr>
                    <th className="border-b-2 border-teal p-4 text-left text-lg font-bold text-teal">We Believe…</th>
                    <th className="border-b-2 border-teal p-4 text-left text-lg font-bold text-teal">Because…</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">Everyone is made in the image of God.</td>
                    <td className="border-b border-gray-200 p-4">
                      Your worth isn't earned. You are already deeply loved.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">
                      Jesus didn't come to start a religion, He came to set people free.
                    </td>
                    <td className="border-b border-gray-200 p-4">The Kingdom is about belonging, not behaviour.</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">Grace is the point, not the reward.</td>
                    <td className="border-b border-gray-200 p-4">
                      It's not about getting it all right. It's about coming as you are.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">
                      The Spirit speaks through doubt, fellowship, and deep questions.
                    </td>
                    <td className="border-b border-gray-200 p-4">Asking isn't wrong. Pretending is.</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">
                      Healing is holy. It's the children's meat.
                    </td>
                    <td className="border-b border-gray-200 p-4">Jesus touched wounds. We don't need to hide ours.</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">The church is bigger than buildings.</td>
                    <td className="border-b border-gray-200 p-4">
                      We are the Body where love, truth, and freedom are lived out.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-4 font-medium">
                      You don't have to have it all figured out.
                    </td>
                    <td className="border-b border-gray-200 p-4">Most of us are still healing. And that's OK.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal mb-6">Partner With Us</h2>
            <p className="text-lg mb-6">
              Want to be part of what we do or want one of our programs in your community?
              <br />
              Collaborate on content or creative projects?
              <br />
              Fund a programme or co-host a gathering?
            </p>
            <p className="text-lg mb-8">
              We're open to working with those who share our values across denominations, sectors, and cultures.
            </p>
            <Button asChild className="bg-coral hover:bg-coral/90">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find your voice, follow His.</h2>
          <p className="text-xl mb-8">This is grace with teeth. Voice with power. Faith made free.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-yellow hover:bg-yellow/90 text-navy">
              <Link href="/podcast">Listen to the podcast</Link>
            </Button>
            <Button asChild className="bg-cyan hover:bg-cyan/90 text-navy">
              <Link href="/programs">Join a programme</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20">
              <Link href="/get-involved">Get involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
