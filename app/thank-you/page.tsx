import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white px-4">
      <div className="max-w-xl text-center space-y-6">

        {/* Icon */}
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Thank You! 🙏
        </h1>

        {/* Message */}
        <p className="text-lg text-muted-foreground">
          Your message has been successfully sent. Our team will contact you within 24 hours.
        </p>

        {/* Extra Info */}
        <p className="text-sm text-gray-500">
          Meanwhile, you can explore our Himalayan journeys and destinations.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button asChild size="lg">
            <Link href="/">
              Go to Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/destinations">
              Explore Treks
            </Link>
          </Button>
        </div>

      </div>
    </div>
  )
}