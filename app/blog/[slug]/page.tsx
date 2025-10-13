import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = {
    title: "The Sacred Journey to Adi Kailash: A Complete Guide",
    description: "Everything you need to know about planning your pilgrimage to this divine destination",
    content: [
      {
        type: "paragraph",
        text: "Adi Kailash, also known as Chhota Kailash, is a sacred peak located in the Pithoragarh district of Uttarakhand. It bears a striking resemblance to Mount Kailash in Tibet and is considered a divine abode of Lord Shiva. For those who cannot make the journey to the original Mount Kailash in Tibet, Adi Kailash offers a spiritually fulfilling alternative.",
      },
      {
        type: "heading",
        text: "The Spiritual Significance",
      },
      {
        type: "paragraph",
        text: "Adi Kailash holds immense spiritual significance in Hindu mythology. It is believed to be one of the residences of Lord Shiva and Goddess Parvati. The mountain's resemblance to the sacred Mount Kailash in Tibet adds to its divine aura. Nearby, Om Parvat is famous for the natural formation of the sacred 'Om' symbol on its face, visible when covered with snow.",
      },
      {
        type: "image",
        url: "/adi/omparvat.jpg",
        alt: "Om Parvat with natural Om formation",
        caption: "The natural Om formation on Om Parvat, visible when covered with snow",
      },
      {
        type: "heading",
        text: "Best Time to Visit",
      },
      {
        type: "paragraph",
        text: "The best time to visit Adi Kailash is from May to October when the weather is relatively stable and the trails are clear of snow. June to September offers the best chance to see the Om symbol on Om Parvat as the snow patterns are most distinct during this period. However, this is also the monsoon season, so be prepared for occasional rainfall.",
      },
      {
        type: "heading",
        text: "Permits and Permissions",
      },
      {
        type: "paragraph",
        text: "As Adi Kailash is located in a restricted area near the Indo-Tibet border, special permits are required for the journey. Indian citizens need to provide a valid ID proof, while foreign nationals need additional permits. It's advisable to arrange these permits through a registered travel agency like Yati Dham, as we handle all the paperwork and necessary formalities.",
      },
      {
        type: "heading",
        text: "The Journey",
      },
      {
        type: "paragraph",
        text: "The journey to Adi Kailash typically starts from Dharchula, a town in the Pithoragarh district. From there, the route passes through Tawaghat, Narayan Ashram, Sosa, Malpa, Budhi, Gunji, and finally to Kalapani, which serves as the base for the Adi Kailash darshan. The trek involves walking through beautiful valleys, crossing streams, and navigating mountain trails.",
      },
      {
        type: "image",
        url: "/adi/adikailash.jpg",
        alt: "Trekking route to Adi Kailash",
        caption: "The scenic trekking route to Adi Kailash through pristine valleys and forests",
      },
      {
        type: "heading",
        text: "Accommodation and Facilities",
      },
      {
        type: "paragraph",
        text: "Accommodation during the journey ranges from basic guesthouses to tented camps. In towns like Dharchula, you can find comfortable hotels, while in remote areas like Gunji and Kalapani, accommodation is more basic. It's important to be prepared for simple living conditions during parts of the journey. Most accommodations provide basic meals, but it's advisable to carry some snacks and energy bars.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "The journey to Adi Kailash is not just a trek but a spiritual odyssey that offers a profound connection with nature and divinity. With proper planning, preparation, and respect for the sacred land, this pilgrimage can be a transformative experience. At Yati Dham, we specialize in organizing this sacred journey, ensuring that all aspects of the trip are handled with care and expertise.",
      },
    ],
    author: "Rajesh Joshi",
    date: "June 10, 2024",
    category: "Travel Guide",
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/himalayas.jpg"
          alt={article.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">{article.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-4">{article.description}</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>By {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            {article.content.map((block, index) => {
              if (block.type === "paragraph") {
                return <p key={index}>{block.text}</p>
              } else if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {block.text}
                  </h2>
                )
              } else if (block.type === "image") {
                return (
                  <figure key={index} className="my-8">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                      <Image src={block.url} alt={block.alt} fill className="object-cover" />
                    </div>
                    {block.caption && (
                      <figcaption className="text-center text-sm text-muted-foreground mt-2">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                )
              }
              return null
            })}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Himalayas?</h2>
            <p className="text-xl mb-8 opacity-90">
              Turn the stories you've read into your own adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/destinations">Explore Destinations</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
