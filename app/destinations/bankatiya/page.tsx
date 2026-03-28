import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Mountain, Calendar, MapPin, Check, ArrowRight, AlertCircle } from "lucide-react";

export default function BankatiyaPage() {
  const destination = {
    title: "Bankatiya Peak Base Camp Trek",
    description: "Explore the untouched trails of Laspa Village leading to the majestic Bankatiya Peak",
    longDescription:
      "Starting from Laspa Village in Munsiyari, this trek leads you through dense pine forests, wildflower meadows, and alpine ridges to reach the base of Bankatiya Peak. Enjoy breathtaking views of the Panchachuli range, tranquil campsites, and authentic Kumaoni village life. A perfect blend of adventure and cultural immersion.",
    image: "/himalayas.jpg?height=600&width=1200",
    gallery: [
      "/bankatiya/bankatiya4.jpg?height=400&width=600",
      "/bankatiya/bankatiya1.jpeg?height=400&width=600",
      "/bankatiya/bankatiya2.jpeg?height=400&width=600",
      "/bankatiya/bankatiya3.jpeg?height=400&width=600",
    ],
    category: "Himalayan Expedition",
    duration: "5 Days",
    difficulty: "Moderate",
    maxAltitude: "4,500m",
    bestSeason: "May to October",
    startingPoint: "Kathgodam, Haldwani",
    endingPoint: "Kathgodam, Haldwani",
    price: 8999,
    includes: [
      "Accommodation (tents, homestays & guesthouses)",
      "All meals during the trek",
      "Experienced trekking guides",
      "Permits and entry fees",
      "Transportation as per itinerary",
      "First aid and safety equipment",
      "Trekking equipment (tents, sleeping bags, etc.)",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Flights or trains to the starting point",
      "Porter charges (available at additional cost)",
      "Tips and gratuities",
      "Personal trekking gear (boots, clothing, etc.)",
      "Anything not mentioned in inclusions",
    ],
    itinerary: [
       {
    day: "Day 1",
    title: "Kathgodam to Munsiyari (Drive)",
    description:
      "Pick-up from Kathgodam Railway Station and begin a scenic drive to Munsiyari via Almora, and Birthi Falls. Enjoy beautiful Himalayan landscapes throughout the journey. Overnight stay in Munsiyari.",
  },
  {
    day: "Day 2",
    title: "Munsiyari to Laspa Village",
    description:
      "After breakfast, drive to Laspa Village. Explore the traditional Himalayan lifestyle, interact with locals, and acclimatize. Enjoy stunning views of the Panchachuli peaks. Overnight stay in Laspa (homestay/camp).",
  },
  {
    day: "Day 3",
    title: "Laspa to Bankatiya Base Camp (Trek)",
    description:
      "Begin trek through forests, river streams, and alpine meadows to reach Bankatiya Base Camp. Witness breathtaking views of the Panchachuli range. Set up camp and enjoy sunset. Overnight at base camp.",
  },
  {
    day: "Day 4",
    title: "Base Camp Exploration & Return to Munsiyari",
    description:
      "Enjoy sunrise and explore nearby areas around the base camp. Later trek back to Laspa Village and drive to Munsiyari. Relax after the trek. Overnight stay in Munsiyari.",
  },
  {
    day: "Day 5",
    title: "Munsiyari to Kathgodam (Departure)",
    description:
      "After breakfast, drive back to Kathgodam with unforgettable memories of the Himalayas. Drop-off at Kathgodam Railway Station.",
  },
    ],
    highlights: [
      "Trek to the Bankatiya Peak Base Camp",
      "Breathtaking views of the snow-capped mountains",
      "Walk through Laspa Village and alpine meadows",
      "Experience authentic Kumaoni culture",
      "Camp amidst pristine Himalayan landscapes",
    ],
    faqs: [
      {
        question: "How difficult is the Bankatiya Peak trek?",
        answer:
          "The trek is rated as moderate to difficult. It involves trekking 10-15 km per day on mountain trails with significant altitude gain. Previous trekking experience and good fitness are recommended.",
      },
      {
        question: "What is the best time to do the trek?",
        answer:
          "The best time is from May to October when the trails are clear and weather is stable.",
      },
      {
        question: "Do I need any special permits?",
        answer:
          "Yes, trekking in this region may require permits. We arrange all necessary permits for our trekkers.",
      },
      {
        question: "What accommodation is provided?",
        answer:
          "Accommodation includes tents at base camps and homestays in villages. All camping equipment is provided for comfort.",
      },
      {
        question: "Will I see the Mountain Ranges?",
        answer:
          "Yes! On clear days, the trek offers spectacular views of the peaks and surrounding Himalayan landscape.",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <Badge className="mb-4 bg-primary/80 hover:bg-primary/90">{destination.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-200">{destination.description}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground mb-8">{destination.longDescription}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <Clock className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Duration</h3>
                  <p className="text-sm text-muted-foreground">{destination.duration}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <Mountain className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Difficulty</h3>
                  <p className="text-sm text-muted-foreground">{destination.difficulty}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <MapPin className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Max Altitude</h3>
                  <p className="text-sm text-muted-foreground">{destination.maxAltitude}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Best Season</h3>
                  <p className="text-sm text-muted-foreground">{destination.bestSeason}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <ArrowRight className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold">Starting Point</h3>
                  <p className="text-sm text-muted-foreground">{destination.startingPoint}</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
                  <ArrowRight className="h-6 w-6 text-primary mb-2 rotate-180" />
                  <h3 className="font-semibold">Ending Point</h3>
                  <p className="text-sm text-muted-foreground">{destination.endingPoint}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {destination.gallery.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${destination.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes">Includes/Excludes</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary" className="pt-6">
                  <div className="space-y-6">
                    {destination.itinerary.map((day, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 pb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {day.day}
                          </Badge>
                          <h3 className="font-semibold">{day.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="includes" className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2">
                        {destination.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What's Not Included</h3>
                      <ul className="space-y-2">
                        {destination.excludes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="h-5 w-5 flex items-center justify-center text-red-500 mt-0.5">×</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="faqs" className="pt-6">
                  <div className="space-y-6">
                    {destination.faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-4">
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book This Trek</CardTitle>
                  <CardDescription>Request your custom date</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold">₹{destination.price.toLocaleString()}</p>
                    </div>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      {destination.difficulty}
                    </Badge>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href="/contact">Request Custom Date</Link>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link
                      href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Bankatiya%20Peak%20trek.%20Can%20you%20provide%20more%20information?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact on WhatsApp
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Pay QR Code Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Simple and Secure Booking</h2>
              <p className="text-muted-foreground mb-4">
                We've made our booking process simple and secure. Pay directly using Google Pay by scanning the QR code,
                then share the screenshot with us on WhatsApp for instant confirmation.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <p className="text-sm">Scan the QR code with your Google Pay app</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <div>
                    <p className="text-sm">Enter the trek name and your details in the payment note</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">3</span>
                  </div>
                  <div>
                    <p className="text-sm">Take a screenshot of the payment confirmation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">4</span>
                  </div>
                  <div>
                    <p className="text-sm">Share the screenshot with us on WhatsApp</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-amber-50 text-amber-800 rounded-lg mb-6">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">
                  Your booking will be confirmed only after we verify your payment screenshot on WhatsApp.
                </p>
              </div>
              <Button asChild>
                <Link
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20booking%20the%20Bankatiya%20Peak%20trek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                  </svg>
                  Contact Us on WhatsApp
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <Image
                  src="/qr.png?height=300&width=300&text=Google+Pay+QR"
                  alt="Google Pay QR Code"
                  width={250}
                  height={250}
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Scan this QR code with Google Pay to make your payment
              </p>
            </div>
          </div>
        </div>
        
      </section>
     {/* Similar Destinations */}
           <section className="py-16">
             <div className="container px-4">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold mb-4">Similar Destinations</h2>
                 <p className="text-muted-foreground max-w-2xl mx-auto">Explore other adventure treks in the Himalayas</p>
               </div>
     
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Card className="overflow-hidden">
                   <div className="relative h-48 w-full">
                     <Image
                       src="/pindari/pindari.jpeg?height=400&width=600&text=Pindari+Glacier"
                       alt="Pindari Glacier"
                       fill
                       className="object-cover"
                     />
                     <Badge className="absolute top-3 left-3 z-10">Adventure Trek</Badge>
                   </div>
                   <CardHeader>
                     <CardTitle>Pindari Glacier Trek</CardTitle>
                     <CardDescription>Trek to one of the most accessible glaciers in the Kumaon Himalayas</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <div className="flex items-center gap-2 mb-4">
                       <Clock className="h-4 w-4 text-muted-foreground" />
                       <span className="text-sm">7 Days</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <p className="font-semibold">₹12,999</p>
                       <Badge variant="outline">Moderate</Badge>
                     </div>
                   </CardContent>
                   <CardFooter>
                     <Button asChild className="w-full">
                       <Link href="/destinations/pindari-glacier">View Details</Link>
                     </Button>
                   </CardFooter>
                 </Card>
     
                 <Card className="overflow-hidden">
                   <div className="relative h-48 w-full">
                     <Image
                       src="/nanda/nanda.jpeg?height=400&width=600&text=Nanda+Devi+Base+Camp"
                       alt="Nanda Devi Base Camp"
                       fill
                       className="object-cover"
                     />
                     <Badge className="absolute top-3 left-3 z-10">Expedition</Badge>
                   </div>
                   <CardHeader>
                     <CardTitle>Nanda Devi Base Camp</CardTitle>
                     <CardDescription>Trek to the base of India's second-highest peak</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <div className="flex items-center gap-2 mb-4">
                       <Clock className="h-4 w-4 text-muted-foreground" />
                       <span className="text-sm">6 Days</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <p className="font-semibold">₹15,999</p>
                       <Badge variant="outline">Moderate</Badge>
                     </div>
                   </CardContent>
                   <CardFooter>
                     <Button asChild className="w-full">
                       <Link href="/destinations/nanda-devi">View Details</Link>
                     </Button>
                   </CardFooter>
                 </Card>
     
                 <Card className="overflow-hidden">
                   <div className="relative h-48 w-full">
                     <Image
                       src="/ranthan/ranthan.jpeg?height=400&width=600&text=ranthan+Top"
                       alt="Ranthan Khrak"
                       fill
                       className="object-cover"
                     />
                     <Badge className="absolute top-3 left-3 z-10">Easy Trek</Badge>
                   </div>
                   <CardHeader>
                     <CardTitle>Ranthan Khrak Trek</CardTitle>
                     <CardDescription>
                     Conquer the high-altitude meadows with breathtaking views of Nanda Devi and Trishul peaks
                     </CardDescription>
                   </CardHeader>
                   <CardContent>
                     <div className="flex items-center gap-2 mb-4">
                       <Clock className="h-4 w-4 text-muted-foreground" />
                       <span className="text-sm">5 Days</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <p className="font-semibold">₹9,999</p>
                       <Badge variant="outline">Moderate</Badge>
                     </div>
                   </CardContent>
                   <CardFooter>
                     <Button asChild className="w-full">
                       <Link href="/destinations/ranthan-khrak">View Details</Link>
                     </Button>
                   </CardFooter>
                 </Card>
               </div>
             </div>
           </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Himalayan Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your Khaliya Top trek today and embark on a journey of a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact for Booking
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link
                  href="https://wa.me/919259071008?text=I'm%20interested%20in%20the%20Khaliya%20Top%20trek.%20Can%20you%20provide%20more%20information?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 15.5a5 5 0 0 0 5 0" />
                  </svg>
                  Contact via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}